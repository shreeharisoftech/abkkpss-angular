import { AfterViewInit, Component, ElementRef,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { ApiUrls } from '../../../core/configs/api-urls';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SimpleHttp, SimplifyService } from '@satvasoftech/simplify-angular';
import { AppService } from '../../../core/services/app.service';
import { ViewMemberDetails, ViewUsers } from '../../../core/database/data-dictionary';
import { HeaderMenuItemComponent } from '../../../shared/layouts/page-header/header-menu-item/header-menu-item.component';
import { AppBaseComponent } from '../../../shared/base-parents/app-base/app-base.component';
import { ListCardComponent } from '../../../shared/components/list-card/list-card.component';
import { FormControl, FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../../shared/layouts/page-header/page-header.component';
import { HttpClient } from '@angular/common/http';
import { Member } from '../../../core/models/models';

@Component({
  selector: 'app-member-detail',
  imports: [MatTabsModule, ListCardComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.scss'
})
export class MemberDetailComponent extends AppBaseComponent implements AfterViewInit {
  memberId: string;
  showEditButtons = false;
  isProfileDataLoaded = false;
  memberDetail: any = {};
  familyMembers: any[] = [];
  requestData: any = {};
  selectedFile: File | null = null;
  isDragging: boolean = false;
  memberDetails: Member = new Member();
  ViewMemberDetails = ViewMemberDetails;
  ViewUsers = ViewUsers;
  selectedIndex = new FormControl(0);
  userData: any;
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  // NgModals
  newPassword: string = '';
  confirmPassword: string = '';
  userId: string = '';
  userMobileNo: string = '';
  userMemberId: string = '';

  constructor(private activatedRoute: ActivatedRoute, elementRef: ElementRef, simplify: SimplifyService, private router: Router, appService: AppService, private http: HttpClient) {
    super(elementRef, simplify, appService);
    let headerComponent = new HeaderMenuItemComponent();
    headerComponent.changeMenuActiveStatus(AppService.appMenu[1].label);
  }

  override ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.memberId = params['id'];
      this.setData();
      // this.showEditButtons = this.memberId == JSON.parse(sessionStorage.getItem('user'))[ViewMemberDetails.memberId] ? true : false;
      this.isProfileDataLoaded = true;
      this.focusFirstTab(parseInt(this.memberId));
    });
  }

  async setData() {
    this.memberId = this.activatedRoute.snapshot.params['id'];
    var member_id = this.memberId;
    let formDataObj = new FormData();
    formDataObj.append('member_id', this.memberId);
    formDataObj.append('add_log', 'true');
    let response: any = await SimpleHttp.postPromise({ url: `${ApiUrls.getMembers}`, formData: formDataObj });
    this.memberDetail = response['records'][0];
    let mainMemberId = this.memberDetail[ViewMemberDetails.mainId];
    formDataObj = new FormData();
    formDataObj.append(ViewMemberDetails.mainId, mainMemberId);
    response = await SimpleHttp.postPromise({ url: `${ApiUrls.getMembers}`, formData: formDataObj });
    this.familyMembers = response['records'];

    this.requestData = {
      [ViewMemberDetails.memberId]: member_id,
    }
    response = await SimpleHttp.postPromise({ url: `${ApiUrls.getUsers}`, data: this.requestData });
    if (response['records'].length > 0) {
      this.userId = response['records'][0][ViewUsers.userId];
      this.userMobileNo = response['records'][0][ViewUsers.userMobile];
      this.userMemberId = response['records'][0][ViewUsers.memberId];
    }else{
      this.userMobileNo = this.memberDetail[ViewMemberDetails.memberPhone];
      this.userMemberId = this.memberDetail[ViewMemberDetails.memberId];
    }
    this.showEditButtons = this.appService.checkUserAccess(this.memberDetail);
    this.isProfileDataLoaded = true;
  }

  redirectToSpouseProfile(spouseId: number): void {
    const url = this.getRedirectUrl(spouseId);
    this.router.navigate([url]);
    this.memberId = spouseId.toString();
    this.setData();
  }

  getRedirectUrl(itemId: number | undefined): string {
    if (itemId === 0) {
      return '#';
    }
    if (itemId === undefined) {
      return '/members/member-detail/';
    }
    return `/members/member-detail/${itemId}`;
  }

  focusFirstTab(id: number) {
    this.selectedIndex.setValue(0);
    if (this.tabGroup) {
      this.tabGroup.selectedIndex = 0;
      this.memberId = id.toString();
    }
  }
  
  async updateCredentials() {
    if (!this.newPassword || this.newPassword.trim() === '') {
      this.simplify.simpleAlertService.error("New Password is required!!");
      return;
    }
    if (!this.confirmPassword || this.confirmPassword.trim() === '') {
      this.simplify.simpleAlertService.error("Confirm Password is required!!");
      return;
    }
    if (this.newPassword != this.confirmPassword) {
      this.simplify.simpleAlertService.error("New Password and Confirm Password do not match!!");
      return;
    }
    debugger;
    const formData = new FormData();
    formData.append(`user[${ViewUsers.userId}]`, this.userId);
    formData.append(`user[${ViewUsers.userMobile}]`, this.userMobileNo);
    formData.append(`user[${ViewUsers.memberId}]`, this.userMemberId);
    formData.append('user[user_password]', this.newPassword);
    formData.append('record_type', 'user');
    formData.append('operation', (this.userId == null || this.userId == undefined || this.userId == '') ? 'INSERT' : 'UPDATE');

    try {
      const response = await fetch(`${ApiUrls.baseApiUrl}api${ApiUrls.performOperation}`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      const result = await response.json();

      if (result["status"] === "success") {
        this.simplify.simpleAlertService.success("Password updated successfully!!");
        this.newPassword = '';
        this.confirmPassword = '';
      } else {
        this.simplify.simpleAlertService.error(result["message"]);
      }
    } catch (error) {
      console.error("Error updating credentials:", error);
      this.simplify.simpleAlertService.error("An error occurred while updating the password.");
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault(); // Prevent default behavior (e.g., opening the file in the browser)
    this.isDragging = true;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      this.validateAndSetFile(file);
    }
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.validateAndSetFile(file);
    }
  }

  validateAndSetFile(file: File): void {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    if (!allowedTypes.includes(file.type)) {
      alert('Only JPG, JPEG, and PNG files are allowed.');
      return;
    }

    this.selectedFile = file; // Update the selected file
  }

  async uploadFile(): Promise<void> {
    if (!this.selectedFile) {
      alert('Please select a file before uploading.');
      return;
    }

    // Perform the upload logic here (e.g., send the file to the server)
    const formData = new FormData();
    formData.append(ViewMemberDetails.memberId, this.memberId);
    formData.append('upload_file', this.selectedFile);
    let response = await SimpleHttp.postPromise({ url: `${ApiUrls.uploadMemberProfileImage}`, formData: formData });
    if (response['status'] === 'success') {
      this.memberDetail[ViewMemberDetails.memberProfilePic] = response['file_name'];
      this.simplify.simpleAlertService.success("Image updated successfully!!");
      var memberId = JSON.parse(sessionStorage.getItem('user'))[ViewMemberDetails.memberId];
      if (response["records"][ViewMemberDetails.memberId] == memberId) {
        sessionStorage.setItem('member', JSON.stringify(response["records"]));
        this.memberDetail = response["records"];
        let headerComponent = new PageHeaderComponent(this.router, this.elementRef, this.simplify, this.appService);
        headerComponent.getMemberProfileImage();
      }
    } else {
      this.simplify.simpleAlertService.error('Error uploading file: ' + response['message']);
    }
  }

  confirmDelete(){
    let formDataObj = new FormData();
    formDataObj.append(ViewMemberDetails.memberId, this.memberId);
    formDataObj.append('operation', 'DELETE');
    formDataObj.append('record_type', 'member');

    fetch(`${ApiUrls.baseApiUrl}api${ApiUrls.performOperation}`, {
      method: 'POST',
      body: formDataObj,
      credentials: 'include',
    })
    .then(response => response.json())
    .then(result => {
      if (result.status === 'success') {
        this.simplify.simpleAlertService.success("Member Profile deleted successfully!!");
        this.router.navigate(['/members']);
      } else {
        this.simplify.simpleAlertService.error("Error deleting profile: " + result.message);
      }
    })
    .catch(error => {
      console.error('Error deleting profile:', error);
      this.simplify.simpleAlertService.error("An error occurred while deleting the profile.");
    });
  }

  getMemberShabiyaText(){
    if (this.memberDetail[ViewMemberDetails.isLifetime]) {
      return 'આજીવન નિભાવફંડ';
    } else {
      return 'સામાન્ય સભ્ય';
    }
  }
}
