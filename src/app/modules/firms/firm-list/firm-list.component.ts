import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SimpleHttp, SimplifyService } from '@satvasoftech/simplify-angular';
import { Subject } from 'rxjs';
import { AppService } from '../../../core/services/app.service';
import { TblFirms, ViewMemberDetails } from '../../../core/database/data-dictionary';
import { AppBaseComponent } from '../../../shared/base-parents/app-base/app-base.component';
import { HeaderMenuItemComponent } from '../../../shared/layouts/page-header/header-menu-item/header-menu-item.component';
import { ApiUrls } from '../../../core/configs/api-urls';
import { ListCardComponent } from "../../../shared/components/list-card/list-card.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-firm-list',
  imports: [ListCardComponent, FormsModule],
  templateUrl: './firm-list.component.html',
  styleUrl: './firm-list.component.scss'
})
export class FirmListComponent extends AppBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();

  firmList:any[] = [];
  startIndex: number = 1;
  calledApi: boolean = false;
  ViewMembersDetails = ViewMemberDetails;
  TblFirms = TblFirms;
  reachedEnd: boolean = false;

  firmName: string = '';
  firmPhone: string = '';
  email: string = '';
  website: string = '';
  zone: string = '';
  city: string = '';

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(elementRef: ElementRef, simplify: SimplifyService, appService: AppService) {
    super(elementRef, simplify, appService);
    let headerComponent = new HeaderMenuItemComponent();
    headerComponent.changeMenuActiveStatus(AppService.appMenu[2].label);
  }

  override ngOnInit(): void {
    this.geFirmList();
  }

  override ngAfterViewInit() {
    this.scrollContainer.nativeElement.addEventListener('scroll', this.onScroll);
  }

  override ngOnDestroy() {
    this.scrollContainer.nativeElement.removeEventListener('scroll', this.onScroll);
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onScroll = (event: Event) => {
    const scrollTop = this.scrollContainer.nativeElement.scrollTop;
    const scrollHeight = this.scrollContainer.nativeElement.scrollHeight;
    const clientHeight = this.scrollContainer.nativeElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      console.log('Fetching more members...');
      this.geFirmList();
    }
  }

  applyFilter() {
    this.firmList = [];
    this.startIndex = 1;
    this.reachedEnd = false;
    document.getElementById('loader')?.classList.remove('hidden');
    this.geFirmList();
  }

  async geFirmList(){
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
    formDataObj.append('firm_name', this.firmName);
    formDataObj.append('firm_phone', this.firmPhone);
    formDataObj.append('firm_email', this.email);
    formDataObj.append('firm_website', this.website);
    formDataObj.append('zone_id', this.zone);
    formDataObj.append('city_name', this.city);
    formDataObj.append('start_index', this.startIndex.toString());
    formDataObj.append('record_count', this.appService.fetchCount.toString());
    formDataObj.append('get_total_count', '1');
    let response:any = await SimpleHttp.postPromise({url:`${ApiUrls.getFirms}`,formData: formDataObj});
    this.firmList = [ ...this.firmList, ...response['records']];
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

  getRedirectUrl(firmId: number | undefined): string {
    if (firmId === undefined) {
      return '/firms';
    }
    return `firm-detail/${firmId}`;
  }
}
