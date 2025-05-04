import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { ApiUrls } from '../../../core/configs/api-urls';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleHttp, SimplifyService } from '@satvasoftech/simplify-angular';
import { AppService } from '../../../core/services/app.service';
import { ViewMemberDetails, ViewUsers } from '../../../core/database/data-dictionary';
import { HeaderMenuItemComponent } from '../../../shared/layouts/page-header/header-menu-item/header-menu-item.component';
import { AppBaseComponent } from '../../../shared/base-parents/app-base/app-base.component';
import { MemberlistCardComponent } from '../../../shared/components/memberlist-card/memberlist-card.component';
import { FormControl, FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../../shared/layouts/page-header/page-header.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import TomSelect from 'tom-select/dist/cjs/tom-select';
import { Member } from '../../../core/models/member';

@Component({
  selector: 'app-member-detail',
  imports: [MatTabsModule, MemberlistCardComponent, CommonModule, FormsModule],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.scss'
})
export class MemberDetailComponent extends AppBaseComponent implements AfterViewInit {
  memberId: string;
  showMemberEditButtons = false;
  isProfileDataLoaded = false;
  memberDetail: any = {};
  familyMembers: any[] = [];
  gotraList: string[] = [];
  nativeList: string[] = [];
  cityList: string[] = [];
  stateList: string[] = [];
  countryList: string[] = [];
  requestData: any = {};
  selectedFile: File | null = null;
  isDragging: boolean = false;
  memberDetails: Member = new Member();
  ViewMemberDetails = ViewMemberDetails;
  selectedIndex = new FormControl(0);
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;
  @ViewChild('main_member', { static: true }) mainMemberElem!: ElementRef;
  @ViewChild('parent_member', { static: true }) parentIdElem!: ElementRef;
  @ViewChild('spouse_id', { static: false }) spouseIdElem!: ElementRef;

  // NgModals
  newPassword: string = '';
  confirmPassword: string = '';

  member: Member = new Member();

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
      this.showMemberEditButtons = this.memberId == JSON.parse(sessionStorage.getItem('user'))[ViewMemberDetails.memberId] ? true : false;
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
    this.setDataToNgModals(this.memberDetail);
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
    }
    await this.getEditProfileData();
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

  getProfilePicPath(profilePic: string | undefined, memberGender: string): string {
    return this.appService.getProfileImagePath(profilePic, memberGender);
  }

  focusFirstTab(id: number) {
    this.selectedIndex.setValue(0);
    if (this.tabGroup) {
      this.tabGroup.selectedIndex = 0;
      this.memberId = id.toString();
    }
  }

  openModal(id: string) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  openChangeCredentialModal() {
    this.newPassword = '';
    this.confirmPassword = '';
    this.openModal('changeCredentialModal');
  }

  closeModal(id: string) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('hidden');
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
    const formData = new FormData();
    formData.append(`user[${ViewUsers.userId}]`, this.userId);
    formData.append(`user[${ViewUsers.userMobile}]`, this.userMobileNo);
    formData.append(`user[${ViewUsers.memberId}]`, this.userMemberId);
    formData.append('user[user_password]', this.newPassword);
    formData.append('record_type', 'user');
    formData.append('operation', 'UPDATE');

    try {
      const response = await fetch(`${ApiUrls.baseApiUrl}api${ApiUrls.performOperation}`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      const result = await response.json();

      if (result["status"] === "success") {
        this.simplify.simpleAlertService.success("Password updated successfully!!");
        this.closeModal('changeCredentialModal');
      } else {
        this.simplify.simpleAlertService.error(result["message"]);
      }
    } catch (error) {
      console.error("Error updating credentials:", error);
      this.simplify.simpleAlertService.error("An error occurred while updating the password.");
    }
  }

  setDataToNgModals(memberDetail: any) {
    this.member.mainName = memberDetail[ViewMemberDetails.mainName] || '';
    this.member.parentName = memberDetail[ViewMemberDetails.parentName] || '';
    this.member.spouseName = memberDetail[ViewMemberDetails.spouseName] || '';
    this.member.zoneName = memberDetail[ViewMemberDetails.zoneName] || '';
    this.member.zoneIndex = memberDetail[ViewMemberDetails.zoneIndex] || 0;
    this.member.memberId = memberDetail[ViewMemberDetails.memberId] || 0;
    this.member.memberFname = memberDetail[ViewMemberDetails.memberFname] || '';
    this.member.memberMname = memberDetail[ViewMemberDetails.memberMname] || '';
    this.member.memberLname = memberDetail[ViewMemberDetails.memberLname] || '';
    this.member.memberGotra = memberDetail[ViewMemberDetails.memberGotra] || '';
    this.member.parentId = memberDetail[ViewMemberDetails.parentId] || 0;
    this.member.memberNative = memberDetail[ViewMemberDetails.memberNative] || '';
    this.member.zoneId = memberDetail[ViewMemberDetails.zoneId] || 0;
    this.member.memberPhone = memberDetail[ViewMemberDetails.memberPhone] || '';
    this.member.memberEmail = memberDetail[ViewMemberDetails.memberEmail] || '';
    this.member.memberDob = memberDetail[ViewMemberDetails.memberDob] || '';
    this.member.memberGender = memberDetail[ViewMemberDetails.memberGender] || '';
    this.member.bloodGroup = memberDetail[ViewMemberDetails.bloodGroup] || '';
    this.member.maritialStatus = memberDetail[ViewMemberDetails.maritialStatus] || 0;
    this.member.spouseId = memberDetail[ViewMemberDetails.spouseId] || 0;
    this.member.engagementDate = memberDetail[ViewMemberDetails.engagementDate] || '';
    this.member.marraigeDate = memberDetail[ViewMemberDetails.marraigeDate] || '';
    this.member.memberQualification = memberDetail[ViewMemberDetails.memberQualification] || '';
    this.member.relationWithMain = memberDetail[ViewMemberDetails.relationWithMain] || '';
    this.member.activeStatus = memberDetail[ViewMemberDetails.activeStatus] || '';
    this.member.aliveStatus = memberDetail[ViewMemberDetails.aliveStatus] || '';
    this.member.deathDate = memberDetail[ViewMemberDetails.deathDate] || '';
    this.member.memberProfilePic = memberDetail[ViewMemberDetails.memberProfilePic] || '';
    this.member.receiptNo = memberDetail[ViewMemberDetails.receiptNo] || '';
    this.member.receiptAmount = memberDetail[ViewMemberDetails.receiptAmount] || 0;
    this.member.receiptDate = memberDetail[ViewMemberDetails.receiptDate] || '';
    this.member.memberName = memberDetail[ViewMemberDetails.memberName] || '';
    this.member.memberAge = memberDetail[ViewMemberDetails.memberAge] || 0;
    this.member.birthDay = memberDetail[ViewMemberDetails.birthDay] || 0;
    this.member.birthMonth = memberDetail[ViewMemberDetails.birthMonth] || 0;
    this.member.birthYear = memberDetail[ViewMemberDetails.birthYear] || 0;
    this.member.memberAddress = memberDetail[ViewMemberDetails.memberAddress] || '';
    this.member.cityName = memberDetail[ViewMemberDetails.cityName] || '';
    this.member.stateName = memberDetail[ViewMemberDetails.stateName] || '';
    this.member.countryName = memberDetail[ViewMemberDetails.countryName] || '';
    this.member.postalCode = memberDetail[ViewMemberDetails.postalCode] || '';
    this.member.addressLatitude = memberDetail[ViewMemberDetails.addressLatitude] || 0;
    this.member.addressLongitude = memberDetail[ViewMemberDetails.addressLongitude] || 0;
    this.member.familyIndex = memberDetail[ViewMemberDetails.familyIndex] || 0;
    this.member.zoneFamilyIndex = memberDetail[ViewMemberDetails.zoneFamilyIndex] || 0;
    this.member.isLifetime = memberDetail[ViewMemberDetails.isLifetime] || false;
    this.member.memberType = memberDetail[ViewMemberDetails.memberType] || '';
    this.member.mainId = memberDetail[ViewMemberDetails.mainId] || 0;
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
    this.closeModal('uploadProfilePicModal');
    if (response['status'] === 'success') {
      this.member.memberProfilePic = response['file_name'];
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

  async getEditProfileData(): Promise<void> {
    await Promise.all([
      this.fetchDistinctFieldData(ViewMemberDetails.memberGotra).then(data => (this.gotraList = data)),
      this.fetchDistinctFieldData(ViewMemberDetails.memberNative).then(data => (this.nativeList = data)),
      this.fetchDistinctFieldData(ViewMemberDetails.cityName).then(data => (this.cityList = data)),
      this.fetchDistinctFieldData(ViewMemberDetails.stateName).then(data => (this.stateList = data)),
      this.fetchDistinctFieldData(ViewMemberDetails.countryName).then(data => (this.countryList = data)),
    ]);

    if (this.showMemberEditButtons) {
      await this.fetchAndSetMemberData(
        this.memberDetail[ViewMemberDetails.mainId],
        this.memberDetail[ViewMemberDetails.mainName],
        '',
        this.mainMemberElem,
        'Select a main member'
      );

      await this.fetchAndSetMemberData(
        this.memberDetail[ViewMemberDetails.parentId],
        this.memberDetail[ViewMemberDetails.parentName],
        '',
        this.parentIdElem,
        'Select a parent member',
        { [ViewMemberDetails.memberGender]: 'M' }
      );

      await this.fetchAndSetMemberData(
        this.memberDetail[ViewMemberDetails.spouseId],
        this.memberDetail[ViewMemberDetails.spouseName],
        '',
        this.spouseIdElem,
        'Select a spouse'
      );
    }
  }

  updateMemberDetails() {
    if (!this.member.memberFname) {
      this.simplify.simpleAlertService.error("First Name is required.");
      return;
    }

    if (!this.member.memberMname) {
      this.simplify.simpleAlertService.error("Middle Name is required.");
      return;
    }

    // Validate Last Name
    if (!this.member.memberLname) {
      this.simplify.simpleAlertService.error("Last Name is required.");
      return;
    }

    // Validate Phone Number (10-digit format)
    if (!this.member.memberPhone || !/^\d{10}$/.test(this.member.memberPhone)) {
      this.simplify.simpleAlertService.error("A valid 10-digit phone number is required.");
      return;
    }

    // Validate Date of Birth
    if (!this.member.memberDob) {
      this.simplify.simpleAlertService.error("Date of Birth is required.");
      return;
    }

    // Validate Gender
    if (!this.member.memberGender) {
      this.simplify.simpleAlertService.error("Gender is required.");
      return;
    }

    // Validate Address
    if (!this.member.memberAddress) {
      this.simplify.simpleAlertService.error("Address is required.");
      return;
    }

    // Validate Country Name
    if (!this.member.countryName) {
      this.simplify.simpleAlertService.error("Country Name is required.");
      return;
    }

    // Validate State Name
    if (!this.member.stateName) {
      this.simplify.simpleAlertService.error("State Name is required.");
      return;
    }

    // Validate City Name
    if (!this.member.cityName) {
      this.simplify.simpleAlertService.error("City Name is required.");
      return;
    }

    // Validate Postal Code
    if (!this.member.postalCode || !/^\d{5,6}$/.test(this.member.postalCode)) {
      this.simplify.simpleAlertService.error("A valid Postal Code is required.");
      return;
    }

    // Validate Zone ID
    if (!this.member.zoneId) {
      this.simplify.simpleAlertService.error("Zone ID is required.");
      return;
    }

    // Validate Engagement Date (if marital status is engaged or married)
    if (this.member.maritialStatus >= 1 && !this.member.engagementDate) {
      this.simplify.simpleAlertService.error("Engagement Date is required for engaged or married members.");
      return;
    }

    // Validate Marriage Date (if marital status is married)
    if (this.member.maritialStatus === 2 && !this.member.marraigeDate) {
      this.simplify.simpleAlertService.error("Marriage Date is required for married members.");
      return;
    }

    // Validate marriage date with engagement date
    if (this.member.maritialStatus === 2 && this.member.engagementDate && this.member.marraigeDate) {
      const engagementDate = new Date(this.member.engagementDate);
      const marriageDate = new Date(this.member.marraigeDate);
      if (marriageDate <= engagementDate) {
        this.simplify.simpleAlertService.error("Marriage Date cannot be earlier than Engagement Date.");
        return;
      }
    }

    // Validate Spouse ID (if marital status is married)
    if (this.member.maritialStatus === 2 && !this.member.spouseId) {
      this.simplify.simpleAlertService.error("Spouse ID is required for married members.");
      return;
    }

    // Validate Alive Status
    if (!this.member.aliveStatus) {
      this.simplify.simpleAlertService.error("Alive Status is required.");
      return;
    }

    // Validate Death Date (if alive status is deceased)
    if (this.member.aliveStatus === 'deceased' && !this.member.deathDate) {
      this.simplify.simpleAlertService.error("Death Date is required for deceased members.");
      return;
    }

    let formDataObj = new FormData();
    formDataObj.append(`member[${ViewMemberDetails.memberId}]`, this.memberId);
    formDataObj.append(`member[${ViewMemberDetails.mainId}]`, this.member.mainMemberId.toString());
    formDataObj.append(`member[${ViewMemberDetails.parentId}]`, this.member.parentId.toString());
    formDataObj.append(`member[${ViewMemberDetails.memberFname}]`, this.member.memberFname);
    formDataObj.append(`member[${ViewMemberDetails.memberMname}]`, this.member.memberMname);
    formDataObj.append(`member[${ViewMemberDetails.memberLname}]`, this.member.memberLname);
    formDataObj.append(`member[${ViewMemberDetails.memberGotra}]`, this.member.memberGotra);
    formDataObj.append(`member[${ViewMemberDetails.memberNative}]`, this.member.memberNative);
    formDataObj.append(`member[${ViewMemberDetails.memberPhone}]`, this.member.memberPhone);
    formDataObj.append(`member[${ViewMemberDetails.memberQualification}]`, this.member.memberQualification);
    formDataObj.append(`member[${ViewMemberDetails.memberGender}]`, this.member.memberGender);
    formDataObj.append(`member[${ViewMemberDetails.memberDob}]`, this.member.memberDob);
    formDataObj.append(`member[${ViewMemberDetails.bloodGroup}]`, this.member.bloodGroup);
    formDataObj.append(`member[${ViewMemberDetails.maritialStatus}]`, this.member.maritialStatus.toString());
    formDataObj.append(`member[${ViewMemberDetails.spouseId}]`, this.member.maritialStatus > 0 ? this.member.spouseId.toString() : null);
    formDataObj.append(`member[${ViewMemberDetails.engagementDate}]`, this.member.maritialStatus > 0 ? this.member.engagementDate : null);
    formDataObj.append(`member[${ViewMemberDetails.marraigeDate}]`, this.member.maritialStatus > 0 ? this.member.marraigeDate : null);
    formDataObj.append(`member[${ViewMemberDetails.zoneId}]`, this.member.zoneId.toString());
    formDataObj.append(`member[${ViewMemberDetails.memberAddress}]`, this.member.memberAddress);
    formDataObj.append(`member[${ViewMemberDetails.countryName}]`, this.member.countryName);
    formDataObj.append(`member[${ViewMemberDetails.stateName}]`, this.member.stateName);
    formDataObj.append(`member[${ViewMemberDetails.cityName}]`, this.member.cityName);
    formDataObj.append(`member[${ViewMemberDetails.postalCode}]`, this.member.postalCode);
    formDataObj.append(`member[${ViewMemberDetails.aliveStatus}]`, this.member.aliveStatus);
    formDataObj.append(`member[${ViewMemberDetails.deathDate}]`, this.member.deathDate);
    formDataObj.append('record_type', 'member');
    formDataObj.append('operation', 'UPDATE');
    formDataObj.append('add_log', 'true');
    fetch(`${ApiUrls.baseApiUrl}api${ApiUrls.performOperation}`, { method: 'POST', body: formDataObj, credentials: 'include' })
      .then(response => response.json())
      .then(result => {
        if (result["status"] === "success") {
          this.simplify.simpleAlertService.success("Member details updated successfully!!");
          this.memberDetail = result["records"];
          sessionStorage.setItem('member', JSON.stringify(this.memberDetail));
          this.closeModal('editProfileModal');
        } else {
          this.simplify.simpleAlertService.error(result["message"]);
        }
      })
      .catch(error => {
        console.error("Error updating member details:", error);
        this.simplify.simpleAlertService.error("An error occurred while updating the member details.");
      });
  }

  private async fetchAndSetMemberData(
    memberId: string,
    defaultName: string,
    defaultPhone: string,
    element: ElementRef,
    placeholder: string,
    additionalParams: { [key: string]: string } = {}
  ): Promise<void> {
    const member = this.familyMembers.find(member => member[ViewMemberDetails.memberId] === memberId);

    const id = member ? member[ViewMemberDetails.memberId] : memberId;
    const name = member ? member[ViewMemberDetails.memberName] : defaultName;
    const phone = member ? member[ViewMemberDetails.memberPhone] : defaultPhone;

    const tomSelectInstance = this.initializeTomSelect(
      element,
      placeholder,
      additionalParams,
      id,
      name,
      phone
    );

    tomSelectInstance['setValueWithOption'](id, name, phone); // Pass the phone value
  }

  private initializeTomSelect(
    element: ElementRef,
    placeholder: string,
    additionalParams: { [key: string]: string } = {},
    selectedOptionId: string,
    selectedOptionName: string,
    selectedOptionPhone: string
  ): TomSelect {
    const tomSelectInstance = new TomSelect(element.nativeElement, {
      create: false,
      allowEmptyOption: true,
      placeholder: placeholder,
      valueField: "id",
      labelField: "name",
      searchField: ['id', 'phone'],
      options: [],
      preload: true,
      maxItems: 1,
      loadThrottle: 300,
      load: async (query, callback) => {
        const formDataObj = new FormData();
        formDataObj.append('query', query);
        Object.keys(additionalParams).forEach(key => {
          formDataObj.append(key, additionalParams[key]);
        });

        try {
          const response = await fetch(`${ApiUrls.baseApiUrl}api${ApiUrls.getMembers}`, {
            method: 'POST',
            body: formDataObj,
          });
          const data = await response.json();
          const records = data?.records || [];
          const mapped = records.map((user: any) => ({
            id: user[ViewMemberDetails.memberId],
            name: user[ViewMemberDetails.memberName],
            phone: user[ViewMemberDetails.memberPhone],
          }));

          // Check if the selected option exists, and add it if not
          if (selectedOptionId !== null && selectedOptionName !== undefined && selectedOptionId != null && selectedOptionName != null) {
            const isOptionAvailable = mapped.some(x => x.id === selectedOptionId);
            if (!isOptionAvailable) {
              mapped.push({ id: selectedOptionId, name: selectedOptionName, phone: selectedOptionPhone });
            }
          }

          callback(mapped);
        } catch (error) {
          console.error('Error loading Tom Select options:', error);
          callback();
        }
      },
      render: {
        option: (item, escape) => `
          <div class="p-2">
            <div class="text-center text-md ">${escape(item.name || '')}</div>
            <div class="flex justify-between">
              <span>Member Id:&nbsp;<span class="font-semibold">${escape(item.id)}</span></span>
              <span>Phone:&nbsp;<span class="font-semibold">${escape(item.phone || '')}</span></span>
            </div>
          </div>
        `,
      },
    });

    tomSelectInstance['setValueWithOption'] = (value: string, label: string, phone: string) => {
      if (value && label) { // Ensure value and label are not null or undefined
        if (!tomSelectInstance.options[value]) {
          tomSelectInstance.addOption({ id: value, name: label, phone: phone });
        }
        tomSelectInstance.setValue(value);
      } else {
        console.error('Invalid value or label passed to setValueWithOption:', { value, label });
      }
    };

    return tomSelectInstance;
  }

  private fetchDistinctFieldData(fieldName: string): Promise<string[]> {
    const formDataObj = new FormData();
    formDataObj.append('record_type', 'member');
    formDataObj.append('operation', 'SELECT');
    formDataObj.append('select_distinct_field', fieldName);

    return fetch(`${ApiUrls.baseApiUrl}api${ApiUrls.performOperation}`, {
      method: 'POST',
      body: formDataObj,
      credentials: 'include',
    })
      .then(response => response.json())
      .then(result => result.records.map((item: any) => item[fieldName]))
      .catch(error => {
        console.error(`Error fetching distinct field data for ${fieldName}:`, error);
        return [];
      });
  }
}
