import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Member } from '../../../core/models/models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewMemberDetails, ViewUsers } from '../../../core/database/data-dictionary';
import { SimpleHttp, SimplifyService } from '@satvasoftech/simplify-angular';
import { AppService } from '../../../core/services/app.service';
import { ApiUrls } from '../../../core/configs/api-urls';
import { AppBaseComponent } from '../../../shared/base-parents/app-base/app-base.component';
import { ActivatedRoute, Router } from '@angular/router';
import TomSelect from 'tom-select';
import { bloodGroupList, zoneList } from '../../../core/database/data-objects';

@Component({
  selector: 'app-member-form',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './member-form.component.html',
  styleUrl: './member-form.component.scss'
})
export class MemberFormComponent extends AppBaseComponent implements AfterViewInit  {
  member: Member = new Member();
  gotraList: string[] = [];
  nativeList: string[] = [];
  cityList: string[] = [];
  stateList: string[] = [];
  countryList: string[] = [];
  memberId: string;
  memberDetail: any = {};
  familyMembers: any[] = [];
  bloodGroupList: { "bloodGroup": string }[] = bloodGroupList;
  zoneList: { "zoneId": string, "zoneName": string }[] = zoneList;
  formMode:string = 'new';
  @ViewChild('main_member', { static: true }) mainMemberElem!: ElementRef;
  @ViewChild('parent_member', { static: true }) parentIdElem!: ElementRef;
  @ViewChild('spouse_id', { static: true }) spouseIdElem!: ElementRef;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    elementRef: ElementRef, 
    simplify: SimplifyService, 
    appService: AppService  
  ) {
    super(elementRef, simplify, appService);
  }

  override ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      debugger;
      this.formMode = params['mode'] ?? 'new';
      if(this.formMode.toLowerCase() != 'new' && this.formMode.toLowerCase() != 'edit') {
        this.router.navigate(['/']);
      }
      if(this.formMode.toLowerCase() == 'edit'){
        let access: boolean = this.appService.checkUserAccess(this.memberDetail);
        if(!access){
          this.router.navigate(['/']);
        }
        this.memberId = params['id'];
        this.loadMemberDetails(this.memberId);
      }else{
        this.member = new Member();
        this.memberId = '';
        this.getFormFillUpData();
        if (this.mainMemberElem != undefined && (this.mainMemberElem.nativeElement as any).tomselect) {
          (this.mainMemberElem.nativeElement as any).tomselect.destroy();
        }
        if (this.parentIdElem != undefined && (this.parentIdElem.nativeElement as any).tomselect) {
          (this.parentIdElem.nativeElement as any).tomselect.destroy();
        }
        if (this.spouseIdElem != undefined && (this.spouseIdElem.nativeElement as any).tomselect) {
          (this.spouseIdElem.nativeElement as any).tomselect.destroy();
        }
        this.initializeTomSelect(
          this.mainMemberElem,
          'Select a main member',
          {},
          '',
          '',
          '' 
        );
        this.initializeTomSelect(
          this.parentIdElem,
          'Select a parent member',
          { [ViewMemberDetails.memberGender]: 'M' },
          '',
          '',
          ''
        );
        this.initializeTomSelect(
          this.spouseIdElem,
          'Select a spouse',
          {},
          '',
          '',
          ''
        );
      }
    });
  }

  async loadMemberDetails(memberId: string) {
    let formDataObj = new FormData();
    formDataObj.append('member_id', memberId);
    formDataObj.append('add_log', 'true');
    let response: any = await SimpleHttp.postPromise({ url: `${ApiUrls.getMembers}`, formData: formDataObj });
    this.memberDetail = response['records'][0];
    let mainMemberId = this.memberDetail[ViewMemberDetails.mainId];
    formDataObj = new FormData();
    formDataObj.append(ViewMemberDetails.mainId, mainMemberId);
    response = await SimpleHttp.postPromise({ url: `${ApiUrls.getMembers}`, formData: formDataObj });
    this.familyMembers = response['records'];
    this.setDataToNgModals(this.memberDetail);
    this.getFormFillUpData();
  }

  setDataToNgModals(memberDetail: any) {
    debugger
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
    this.member.aliveStatus = memberDetail[ViewMemberDetails.aliveStatus].toString() || '';
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

  submitMemberForm() {
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
      formDataObj.append(`member[${ViewMemberDetails.mainId}]`, this.member.mainMemberId ? this.member.mainMemberId.toString() : undefined);
      formDataObj.append(`member[${ViewMemberDetails.parentId}]`, this.member.parentId ? this.member.parentId.toString() : undefined);
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
      formDataObj.append(`member[${ViewMemberDetails.zoneId}]`, this.member.zoneId ? this.member.zoneId.toString() : undefined);
      formDataObj.append(`member[${ViewMemberDetails.memberAddress}]`, this.member.memberAddress);
      formDataObj.append(`member[${ViewMemberDetails.countryName}]`, this.member.countryName);
      formDataObj.append(`member[${ViewMemberDetails.stateName}]`, this.member.stateName);
      formDataObj.append(`member[${ViewMemberDetails.cityName}]`, this.member.cityName);
      formDataObj.append(`member[${ViewMemberDetails.postalCode}]`, this.member.postalCode);
      formDataObj.append(`member[${ViewMemberDetails.aliveStatus}]`, this.member.aliveStatus);
      formDataObj.append(`member[${ViewMemberDetails.deathDate}]`, this.member.deathDate);
      formDataObj.append('record_type', 'member');
      formDataObj.append('operation', (this.formMode == 'new' ? 'INSERT' : 'UPDATE'));
      formDataObj.append('add_log', 'true');
      fetch(`${ApiUrls.baseApiUrl}api${ApiUrls.performOperation}`, { method: 'POST', body: formDataObj, credentials: 'include' })
        .then(response => response.json())
        .then(result => {
          if (result["status"] === "success") {
            this.simplify.simpleAlertService.success("Member details updated successfully!!");
            this.router.navigate(['/members']); 
          } else {
            this.simplify.simpleAlertService.error(result["message"]);
          }
        })
        .catch(error => {
          console.error("Error updating member details:", error);
          this.simplify.simpleAlertService.error("An error occurred while updating the member details.");
        });
  }

  async getFormFillUpData(): Promise<void> {
    await Promise.all([
      this.appService.fetchDistinctFieldData(ViewMemberDetails.memberGotra, 'member').then(data => (this.gotraList = data)),
      this.appService.fetchDistinctFieldData(ViewMemberDetails.memberNative, 'member').then(data => (this.nativeList = data)),
      this.appService.fetchDistinctFieldData(ViewMemberDetails.cityName, 'member').then(data => (this.cityList = data)),
      this.appService.fetchDistinctFieldData(ViewMemberDetails.stateName, 'member').then(data => (this.stateList = data)),
      this.appService.fetchDistinctFieldData(ViewMemberDetails.countryName, 'member').then(data => (this.countryList = data)),
    ]);

    this.gotraList = ['Select Gotra', ...this.gotraList];
    this.nativeList = ['Select Native', ...this.nativeList];
    this.cityList = ['Select City', ...this.cityList];
    this.stateList = ['Select State', ...this.stateList];
    this.countryList = ['Select Country', ...this.countryList];

    if (this.formMode.toLowerCase() == 'edit') { // Add here condition to check if member is logged in or not.
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
}
