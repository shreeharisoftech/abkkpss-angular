import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { ApiUrls } from '../../../core/configs/api-urls';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleHttp, SimplifyService } from '@satvasoftech/simplify-angular';
import { AppService } from '../../../core/services/app.service';
import { ViewMemberDetails } from '../../../core/database/data-dictionary';
import { HeaderMenuItemComponent } from '../../../shared/layouts/page-header/header-menu-item/header-menu-item.component';
import { AppBaseComponent } from '../../../shared/base-parents/app-base/app-base.component';
import { MemberlistCardComponent } from '../../../shared/components/memberlist-card/memberlist-card.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-member-detail',
  imports: [MatTabsModule, MemberlistCardComponent, CommonModule],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.scss'
})
export class MemberDetailComponent extends AppBaseComponent {
  memberId: string;
  memberDetail: any = {};
  familyMembers: any[] = [];
  ViewMemberDetails = ViewMemberDetails;
  selectedIndex = new FormControl(0);
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  constructor(private activatedRoute: ActivatedRoute,elementRef: ElementRef, simplify: SimplifyService, private router: Router, appService: AppService) {
    super(elementRef, simplify, appService);
    let headerComponent = new HeaderMenuItemComponent();
    headerComponent.changeMenuActiveStatus(AppService.appMenu[1].label);
  }

  override ngOnInit() {
    this.memberId = this.activatedRoute.snapshot.params['id'];
  }

  override ngAfterViewInit() {
    this.setData();
  }

  async setData(){
    this.memberId = this.activatedRoute.snapshot.params['id'];
    let formDataObj = new FormData();
    formDataObj.append('member_id', this.memberId);
    formDataObj.append('add_log', 'true');
    let response:any = await SimpleHttp.postPromise({url:`${ApiUrls.getMembers}`,formData: formDataObj});
    this.memberDetail = response['records'][0];
    let mainMemberId = this.memberDetail[ViewMemberDetails.mainId];
    formDataObj = new FormData();
    formDataObj.append(ViewMemberDetails.mainId, mainMemberId);
    response = await SimpleHttp.postPromise({url:`${ApiUrls.getMembers}`,formData: formDataObj});
    this.familyMembers = response['records'];
    console.log(this.familyMembers);
  }

  redirectToSpouseProfile(spouseId: number): void {
    // debugger;
    const url = this.getRedirectUrl(spouseId);
    this.router.navigate([url]);
    this.memberId = spouseId.toString();
    this.setData();
  }

  getRedirectUrl(itemId: number | undefined): string {
    if(itemId === 0) {
      return '#';
    }
    if (itemId === undefined) {
      return '/members/member-detail/';
    }
    return `/members/member-detail/${itemId}`;
  }

  getProfilePicPath(profilePic: string | undefined, memberGender: string): string {
    return this.appService.getProfileImagePath(profilePic, memberGender);
  }

  focusFirstTab(id:number) {
    this.selectedIndex.setValue(0);
    if (this.tabGroup) {
      this.tabGroup.selectedIndex = 0;
      this.memberId = id.toString();
      this.setData();
    } else {
      console.log('tabGroup not found');
    }
  }
}
