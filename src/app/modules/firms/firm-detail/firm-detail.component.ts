import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TblFirms, ViewMemberDetails, ViewUsers } from '../../../core/database/data-dictionary';
import { AppBaseComponent } from '../../../shared/base-parents/app-base/app-base.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppService } from '../../../core/services/app.service';
import { SimpleHttp, SimplifyService } from '@satvasoftech/simplify-angular';
import { HttpClient } from '@angular/common/http';
import { HeaderMenuItemComponent } from '../../../shared/layouts/page-header/header-menu-item/header-menu-item.component';
import { CommonModule } from '@angular/common';
import { ApiUrls } from '../../../core/configs/api-urls';
import { ListCardComponent } from "../../../shared/components/list-card/list-card.component";
import { PageHeaderComponent } from '../../../shared/layouts/page-header/page-header.component';

@Component({
  selector: 'app-firm-detail',
  imports: [MatTabsModule, CommonModule, RouterModule, ListCardComponent],
  templateUrl: './firm-detail.component.html',
  styleUrl: './firm-detail.component.scss'
})
export class FirmDetailComponent extends AppBaseComponent implements AfterViewInit {
  TblFirms = TblFirms;
  firmId: string;
  showEditButtons = false;
  isProfileDataLoaded = false;
  firmDetail: any = {};
  requestData: any = {};
  selectedFile: File | null = null;
  isDragging: boolean = false;
  userData: any;
  ViewMemberDetails = ViewMemberDetails;
  memberList: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, elementRef: ElementRef, simplify: SimplifyService, private router: Router, appService: AppService, private http: HttpClient) {
    super(elementRef, simplify, appService);
    let headerComponent = new HeaderMenuItemComponent();
    headerComponent.changeMenuActiveStatus(AppService.appMenu[2].label);
  }

  override ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.firmId = params['id'];
      this.setData();
      this.isProfileDataLoaded = true;
    });
  }

  async setData() {
    this.firmId = this.activatedRoute.snapshot.params['id'];
    let formDataObj = new FormData();
    formDataObj.append('firm_id', this.firmId);
    formDataObj.append('add_log', 'true');
    let response: any = await SimpleHttp.postPromise({ url: `${ApiUrls.getFirms}`, formData: formDataObj });
    this.firmDetail = response['records'][0];
    var memberIds: string = this.firmDetail[TblFirms.firmMembers];
    memberIds = memberIds.replaceAll("[", "").replaceAll("]", "");
    if(memberIds === '') {
      this.memberList = [];
    }else{
      formDataObj = new FormData();
      formDataObj.append('member_id_in', memberIds);
      response = await SimpleHttp.postPromise({ url: `${ApiUrls.getMembers}`, formData: formDataObj });
      this.memberList = response['records'];
    }
    this.showEditButtons = this.showMemberEditButtons();
    this.isProfileDataLoaded = true;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault(); // Prevent default behavior (e.g., opening the file in the browser)
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;

    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      this.validateAndSetFile(file);
    }
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

  async uploadFile(event): Promise<void> {
    if (!this.selectedFile) {
      alert('Please select a file before uploading.');
      return;
    }

    // Perform the upload logic here (e.g., send the file to the server)
    event.preventDefault(); // Prevent the default form submission behavior
    debugger; 
    const formData = new FormData();
    formData.append(TblFirms.firmId, this.firmId);
    formData.append('upload_file', this.selectedFile);
    let response = await SimpleHttp.postPromise({ url: `${ApiUrls.uploadMemberProfileImage}`, formData: formData });
    if (response['status'] === 'success') {
      this.firmDetail[TblFirms.firmProfilePic] = response['file_name'];
      this.simplify.simpleAlertService.success("Image updated successfully!!");
    } else {
      this.simplify.simpleAlertService.error('Error uploading file: ' + response['message']);
    }
  }

  getProfilePicPath(profilePic: string | undefined, memberGender: string): string {
    return this.appService.getProfileImagePath(profilePic, memberGender);
  }

  showMemberEditButtons(): boolean {
    let isProhibited: boolean = true;
    if(sessionStorage.length > 0){
      let memberData = JSON.parse(sessionStorage.getItem('member'));
      let userData = JSON.parse(sessionStorage.getItem('user'));
      this.userData = userData;
      if(memberData[ViewMemberDetails.mainId] != null){
        for(let i=0; i<this.memberList.length; i++){
          if(this.memberList[i][ViewMemberDetails.memberId] == memberData[ViewMemberDetails.memberId]){
            isProhibited = false;
          }else if(this.memberList[i][ViewMemberDetails.mainId] == memberData[ViewMemberDetails.mainId]){
            isProhibited = false;
          }
        }
        if(userData != null && userData != undefined && isProhibited == true){
          if(userData[ViewUsers.userType]==2||userData[ViewUsers.userType]==-1){
            isProhibited = false;
          }else if(userData[ViewUsers.userType]==1){
            if(memberData[ViewMemberDetails.zoneId]==this.memberList[ViewMemberDetails.zoneId]){
              isProhibited = false;
            }
          }
        }
      }
    }
    return !isProhibited;
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
}
