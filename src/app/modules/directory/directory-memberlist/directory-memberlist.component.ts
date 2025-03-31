import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMemberDetails } from '../../../core/database/data-dictionary';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleHttp, SimplifyService } from '@satvasoftech/simplify-angular';
import { AppService } from '../../../core/services/app.service';
import { AppBaseComponent } from '../../../shared/base-parents/app-base/app-base.component';
import { HeaderMenuItemComponent } from '../../../shared/layouts/page-header/header-menu-item/header-menu-item.component';
import { Subject } from 'rxjs';
import { ApiUrls } from '../../../core/configs/api-urls';
import { DirectoryMemberTableComponent } from "../../../shared/components/directory-member-table/directory-member-table.component";

@Component({
  selector: 'app-directory-memberlist',
  imports: [DirectoryMemberTableComponent, CommonModule],
  templateUrl: './directory-memberlist.component.html',
  styleUrl: './directory-memberlist.component.scss'
})
export class DirectoryMemberlistComponent extends AppBaseComponent{
  zoneId: string = '';
  membersList:any[] = [];
  startIndex: number = 1;
  calledApi: boolean = false;
  ViewMembersDetails = ViewMemberDetails;
  reachedEnd: boolean = false;
  private ngUnsubscribe = new Subject<void>();
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(private activatedRoute: ActivatedRoute,elementRef: ElementRef, simplify: SimplifyService, private router: Router, appService: AppService) {
    super(elementRef, simplify, appService);
    let headerComponent = new HeaderMenuItemComponent();
    headerComponent.changeMenuActiveStatus(AppService.appMenu[0].label);
  }

  override ngOnInit() {
    this.zoneId = this.activatedRoute.snapshot.params['id'];
  }

  override ngAfterViewInit() {
    this.setData();
    this.scrollContainer.nativeElement.addEventListener('scroll', this.onScroll);
  }

  override ngOnDestroy() {
    this.scrollContainer.nativeElement.removeEventListener('scroll', this.onScroll);
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  async setData(){
    this.zoneId = this.activatedRoute.snapshot.params['id'];
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
    formDataObj.append("directory_id", this.zoneId);
    formDataObj.append('record_count', '5');
    formDataObj.append('start_index', this.startIndex.toString());
    try {
      let response:any = await SimpleHttp.postPromise({url:`${ApiUrls.getMemberForDirectoryList}`,formData: formDataObj});
      console.log(response);
      if (response!=null && response.status == 'success' && response.records && response.records.length > 0) {  
        // Loop through the number of entries in the response and call the API synchronously
        for (let i = 0; i < response.records.length; i++) {
          let formDataObj = new FormData();
          formDataObj.append(ViewMemberDetails.mainId, response.records[i][ViewMemberDetails.mainId]);
          let nextResponse: any = await SimpleHttp.postPromise({ url: `${ApiUrls.getMembers}`, formData: formDataObj });
          if (nextResponse && nextResponse.status == 'success' && nextResponse.records && nextResponse.records.length > 0) {
            nextResponse.records.sort((a: any, b: any) => {
              const dateA = new Date(a[ViewMemberDetails.memberDob]);
              const dateB = new Date(b[ViewMemberDetails.memberDob]);
              return dateA.getTime() - dateB.getTime(); // Ascending order (oldest first)
            });
            this.membersList.push(nextResponse.records);
          } else {
            console.log('No more data to fetch');
            this.reachedEnd = true;
            break; // Exit the loop if no more data is available
          }
        }
        this.startIndex += 1; // Increment the start index for the next API call
      } else {
        console.log('No data found in the initial response');
        this.reachedEnd = true;
      }
    } catch (error) {
      console.error('Error during API call:', error);
    }
    this.calledApi = false;
  }

  onScroll = () => {
    const scrollTop = this.scrollContainer.nativeElement.scrollTop;
    const scrollHeight = this.scrollContainer.nativeElement.scrollHeight;
    const clientHeight = this.scrollContainer.nativeElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      this.setData();
    }
  };
}
