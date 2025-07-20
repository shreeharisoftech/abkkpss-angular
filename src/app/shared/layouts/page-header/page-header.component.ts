import { Component, ElementRef, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuItemComponent } from './header-menu-item/header-menu-item.component';
import { AppService } from '../../../core/services/app.service';
import { Router, RouterLink } from '@angular/router';
import { ViewMemberDetails } from '../../../core/database/data-dictionary';
import { AppBaseComponent } from '../../base-parents/app-base/app-base.component';
import { SimpleHttp, SimplifyService } from '@satvasoftech/simplify-angular';
import { ApiUrls } from '../../../core/configs/api-urls';

@Component({
	selector: 'app-page-header',
	standalone: true,
	imports: [
    CommonModule,
    HeaderMenuItemComponent,
    RouterLink
],
	templateUrl: './page-header.component.html',
	styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent extends AppBaseComponent {
	@HostBinding('class') hostClass = 'header fixed top-0 z-10 left-0 right-0 flex items-stretch shrink-0 bg-[#fefefe] dark:bg-coal-500 shadow-sm dark:border-b dark:border-b-coal-100';
	@HostBinding('attr.role') hostRole = 'banner';
	@HostBinding('attr.data-sticky') dataSticky = 'true';
	@HostBinding('attr.data-sticky-name') dataStickyName = 'header';
	@HostBinding('id') hostId = 'header';
	ViewMemberDetails = ViewMemberDetails;
	AppService = AppService;

	constructor(private router: Router, elementRef: ElementRef, simplify: SimplifyService, appService: AppService){
		super(elementRef, simplify, appService);
	}

	isLoggedIn(): boolean {
		return AppService.isLoggedIn;
	}

	getMemberProfileImage(){
		let member = JSON.parse(sessionStorage.getItem('member') || '{}');
		let appService = new AppService();
		return appService.getProfileImagePath(member[ViewMemberDetails.memberProfilePic], member[ViewMemberDetails.memberGender]);
	}
	
	getMemberDetail(key: string): string {
		let member = JSON.parse(sessionStorage.getItem('member') || '{}');
		return member[key] || '';
	}

	getMemberProfileLink(): string {
		let member = JSON.parse(sessionStorage.getItem('member') || '{}');
		return "/members/member-detail/" + member[ViewMemberDetails.memberId] || '';
	}

	async logOutUser(){
		this.appService.closeProfileDialog();
		let response:any = await SimpleHttp.postPromise({url:ApiUrls.logout});
		if(response["status"] == "success"){
			sessionStorage.removeItem('user');
			sessionStorage.removeItem('member');
			AppService.isLoggedIn = false;
			this.router.navigate(['/auth']);
		}
		else{
			this.simplify.simpleAlertService.error(response["message"]);
		}
	}

	getMemberProfileRibbon(){
		let member = JSON.parse(sessionStorage.getItem('member') || '{}');
		return this.appService.getMemberShabiyaPadColorClass(member[ViewMemberDetails.isLifetime], member[ViewMemberDetails.memberType]);
	}
}
