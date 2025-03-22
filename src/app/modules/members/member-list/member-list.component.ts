import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppBaseComponent } from '../../../shared/base-parents/app-base/app-base.component';
import { SimpleHttp, SimplifyService } from '@satvasoftech/simplify-angular';
import { ApiUrls } from '../../../core/configs/api-urls';
import { TblMemberDetails } from '../../../core/database/data-dictionary';
import { Subject } from 'rxjs';
import { MemberlistCardComponent } from '../../../shared/components/memberlist-card/memberlist-card.component';
import { AppService } from '../../../core/services/app.service';
import { HeaderMenuItemComponent } from '../../../shared/layouts/page-header/header-menu-item/header-menu-item.component';

@Component({
  selector: 'app-member-list',
  imports: [MemberlistCardComponent, FormsModule],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MemberListComponent extends AppBaseComponent implements OnInit, AfterViewInit, OnDestroy{
  membersList:any[] = [];
  startIndex: number = 1;
  calledApi: boolean = false;
  TblMemberDetails = TblMemberDetails;
  reachedEnd: boolean = false;

  memberId: string = '';
  memberFname: string = '';
  memberMname: string = '';
  memberLname: string = '';
  memberPhone: string = '';
  maritialStatus: string = '';
  bloodGroup: string = '';
  zoneId: string = '';
  cityName: string = '';
  memberNative: string = '';
  memberGender: string = '';
  aliveStatus: string = '';

  private ngUnsubscribe = new Subject<void>();

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(elementRef: ElementRef, simplify: SimplifyService, appService: AppService) {
    super(elementRef, simplify, appService);
    let headerComponent = new HeaderMenuItemComponent();
    headerComponent.changeMenuActiveStatus(AppService.appMenu[1].label);
  }

  override ngOnInit(): void {
    this.geMembersList();
  }

  override ngAfterViewInit() {
    this.scrollContainer.nativeElement.addEventListener('scroll', this.onScroll);
  }

  override ngOnDestroy() {
    this.scrollContainer.nativeElement.removeEventListener('scroll', this.onScroll);
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  
  async geMembersList(){
    if (this.calledApi) {
      console.log('API call already in progress');
      return;
    }
    if (this.reachedEnd) {
      console.log('Reached end of the list');
      this.calledApi = false;
      const loader = document.getElementById('loader');
      if (loader) {
        loader.classList.add('hidden');
      }
      return;
    }
    this.calledApi = true;
    let formDataObj = new FormData();
    formDataObj.append('member_id', this.memberId);
    formDataObj.append('member_fname', this.memberFname);
    formDataObj.append('member_mname', this.memberMname);
    formDataObj.append('member_lname', this.memberLname);
    formDataObj.append('member_phone', this.memberPhone);
    formDataObj.append('maritial_status', this.maritialStatus);
    formDataObj.append('blood_group', this.bloodGroup);
    formDataObj.append('zone_id', this.zoneId);
    formDataObj.append('city_name', this.cityName);
    formDataObj.append('member_native', this.memberNative);
    formDataObj.append('member_gender', this.memberGender);
    formDataObj.append('alive_status', this.aliveStatus);
    formDataObj.append('start_index', this.startIndex.toString());
    formDataObj.append('record_count', this.appService.fetch_count.toString());
    formDataObj.append('get_total_count', '1');
    let response:any = await SimpleHttp.postPromise({url:`${ApiUrls.getMembers}`,formData: formDataObj});
    this.membersList = [ ...this.membersList, ...response['records']];
    this.calledApi = false;
    this.startIndex++;
    console.log('Data fetched successfully');
    if(response['status'] == 'success'){
      if(response['records_count'] < 50){
        this.reachedEnd = true;
        console.log('Reached end of the list');
        this.calledApi = false;
        const loader = document.getElementById('loader');
        if (loader) {
          loader.classList.add('hidden');
        }

        return;
      }
    }else{
      this.calledApi = false;
      console.error('Error fetching data from API', response["message"]);
    }
  }

  onScroll = (event: Event) => {
    const scrollTop = this.scrollContainer.nativeElement.scrollTop;
    const scrollHeight = this.scrollContainer.nativeElement.scrollHeight;
    const clientHeight = this.scrollContainer.nativeElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      console.log('Fetching more members...');
      this.geMembersList();
    }
  }

  getRedirectUrl(itemId: number | undefined): string {
    if (itemId === undefined) {
      return '/member-detail/';
    }
    return `/member-detail/${itemId}`;
  }

  openModal() {
    const modal = document.getElementById('updateProductModal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  closeModal() {
    const modal = document.getElementById('updateProductModal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  applyFilter() {
    this.membersList = [];
    this.startIndex = 1;
    this.reachedEnd = false;
    document.getElementById('loader')?.classList.remove('hidden');
    this.geMembersList();
    this.closeModal();
  }
}
