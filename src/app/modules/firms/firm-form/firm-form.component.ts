import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TblFirms, ViewMemberDetails, ViewUsers } from '../../../core/database/data-dictionary';
import { SimpleHttp, SimplifyService } from '@satvasoftech/simplify-angular';
import { Firm } from '../../../core/models/models';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../core/services/app.service';
import { AppBaseComponent } from '../../../shared/base-parents/app-base/app-base.component';
import { ApiUrls } from '../../../core/configs/api-urls';
import TomSelect from 'tom-select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { zoneList } from '../../../core/database/data-objects';
import { ListCardComponent } from "../../../shared/components/list-card/list-card.component";

@Component({
  selector: 'app-firm-form',
  imports: [CommonModule, FormsModule, ListCardComponent],
  templateUrl: './firm-form.component.html',
  styleUrl: './firm-form.component.scss'
})
export class FirmFormComponent extends AppBaseComponent implements AfterViewInit   {
  cityList: string[] = [];
  stateList: string[] = [];
  countryList: string[] = [];
  firmId: string;
  firmDetail: any = {};
  firmMemberDetails: any = [];
  firm: Firm = new Firm();
  ViewMemberDetails = ViewMemberDetails;
  formMode:string = 'new';
  zoneList: { "zoneId": string, "zoneName": string }[] = zoneList;
  tomInstance: TomSelect | undefined;
  @ViewChild('firm_member', { static: true }) firmMemberElem!: ElementRef;

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
        let access: boolean = this.appService.checkUserAccess(this.firmDetail);
        if(!access){
          this.router.navigate(['/']);
        }
        this.firmId = params['id'];
        this.loadFirmDetails(this.firmId);
      }else{
        this.firm = new Firm();
        this.firmId = '';
        this.getFormFillUpData();
        if (this.firmMemberElem != undefined && (this.firmMemberElem.nativeElement as any).tomselect) {
          (this.firmMemberElem.nativeElement as any).tomselect.destroy();
        }
        this.initializeTomSelect(
          this.firmMemberElem,
          'Select a firm member',
          {},
          '',
          '',
          '' 
        );
      }
    });
  }

  async loadFirmDetails(firmId: string) {
    let formDataObj = new FormData();
    formDataObj.append('firm_id', firmId);
    formDataObj.append('add_log', 'true');
    let response: any = await SimpleHttp.postPromise({ url: `${ApiUrls.getFirms}`, formData: formDataObj });
    this.firmDetail = response['records'][0];
    this.fetchFirmMembers();
    this.setDataToNgModals(this.firmDetail);
    this.getFormFillUpData();
  }

  setDataToNgModals(firmDetail: any) {
    debugger
    this.firm.firmName = firmDetail[TblFirms.firmName] || '';
    this.firm.firmDescription = firmDetail[TblFirms.firmDescription] || '';
    this.firm.firmPhone = firmDetail[TblFirms.firmPhone] || '';
    this.firm.firmAddress = firmDetail[TblFirms.firmAddress] || '';
    this.firm.firmCity = firmDetail[TblFirms.cityName] || '';
    this.firm.firmState = firmDetail[TblFirms.stateName] || '';
    this.firm.firmCountry = firmDetail[TblFirms.countryName] || '';
    this.firm.firmPostalCode = firmDetail[TblFirms.postalCode] || '';
    this.firm.firmPhone = firmDetail[TblFirms.firmPhone] || '';
    this.firm.firmEmail = firmDetail[TblFirms.firmEmail] || '';
    this.firm.firmWebsite = firmDetail[TblFirms.firmWebsite] || '';
    this.firm.memberId = firmDetail[TblFirms.firmMembers] || 0  ;
    this.firm.firmZoneId = firmDetail[TblFirms.zoneId] || '';
  }

  submitFirmForm() {
    if (!this.firm.firmName) {
      this.simplify.simpleAlertService.error("Firm Name is required.");
      return;
    }

    if (!this.firm.firmDescription) {
      this.simplify.simpleAlertService.error("Description is required.");
      return;
    }
    
    if (!this.firm.firmCity) {
      this.simplify.simpleAlertService.error("City Name is required.");
      return;
    }

    if (!this.firm.firmState) {
      this.simplify.simpleAlertService.error("State Name is required.");
      return;
    }

    if (!this.firm.firmCountry) {
      this.simplify.simpleAlertService.error("Country Name is required.");
      return;
    }

    if (!this.firm.firmPostalCode || !/^\d{5,6}$/.test(this.firm.firmPostalCode)) {
      this.simplify.simpleAlertService.error("A valid Postal Code is required.");
      return;
    }

    // Validate Zone ID
    if (!this.firm.firmZoneId) {
      this.simplify.simpleAlertService.error("Zone ID is required.");
      return;
    }
    let strMemberIds = '';
    let firmMemberIds = this.firmMemberDetails.map(member => member[ViewMemberDetails.memberId]);
    firmMemberIds.forEach(value => {strMemberIds += (value != null && value != undefined && value != '' ? ('[' +value + '],') : ''); });
    if (strMemberIds.length > 0) {
      strMemberIds = strMemberIds.slice(0, -1); // Remove the trailing comma
    }
    let formDataObj = new FormData();
    // Prepare data using FormData (will be sent as multipart/form-data, not x-www-form-urlencoded)
    formDataObj.append(`firm[${TblFirms.firmId}]`, this.firmId || '');
    formDataObj.append(`firm[${TblFirms.firmName}]`, this.firm.firmName || '');
    formDataObj.append(`firm[${TblFirms.firmDescription}]`, this.firm.firmDescription || '');
    formDataObj.append(`firm[${TblFirms.firmPhone}]`, this.firm.firmPhone || '');
    formDataObj.append(`firm[${TblFirms.firmEmail}]`, this.firm.firmEmail || '');
    formDataObj.append(`firm[${TblFirms.firmWebsite}]`, this.firm.firmWebsite || '');
    formDataObj.append(`firm[${TblFirms.zoneId}]`, this.firm.firmZoneId ? this.firm.firmZoneId.toString() : '');
    formDataObj.append(`firm[${TblFirms.firmAddress}]`, this.firm.firmAddress || '');
    formDataObj.append(`firm[${TblFirms.countryName}]`, this.firm.firmCountry || '');
    formDataObj.append(`firm[${TblFirms.stateName}]`, this.firm.firmState || '');
    formDataObj.append(`firm[${TblFirms.cityName}]`, this.firm.firmCity || '');
    formDataObj.append(`firm[${TblFirms.postalCode}]`, this.firm.firmPostalCode || '');
    formDataObj.append(`firm[${TblFirms.firmMembers}]`, strMemberIds || '');
    formDataObj.append('record_type', 'firm');
    formDataObj.append('operation', (this.formMode == 'new' ? 'INSERT' : 'UPDATE'));

    fetch(`${ApiUrls.baseApiUrl}api${ApiUrls.performOperation}`, { 
      method: 'POST', 
      body: formDataObj, 
      credentials: 'include',
      headers: {
      'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => {
        if (result["status"] === "success") {
          this.simplify.simpleAlertService.success("Firm details updated successfully!!");
          this.router.navigate(['/firms']);
        } else {
          this.simplify.simpleAlertService.error(result["message"]);
        }
      })
      .catch(error => {
        console.error("Error updating firm details:", error);
        this.simplify.simpleAlertService.error("An error occurred while updating the firm details.");
      });
  }

  async getFormFillUpData(): Promise<void> {
    await Promise.all([
      this.appService.fetchDistinctFieldData(ViewMemberDetails.cityName, 'firm').then(data => (this.cityList = data)),
      this.appService.fetchDistinctFieldData(ViewMemberDetails.stateName, 'firm').then(data => (this.stateList = data)),
      this.appService.fetchDistinctFieldData(ViewMemberDetails.countryName, 'firm').then(data => (this.countryList = data)),
    ]);

    this.cityList = ['Select City', ...this.cityList];
    this.stateList = ['Select State', ...this.stateList];
    this.countryList = ['Select Country', ...this.countryList];

    if (this.formMode.toLowerCase() == 'edit') { // Add here condition to check if member is logged in or not.
      await this.fetchAndSetFirmData(
        this.firmDetail[ViewMemberDetails.mainId],
        this.firmDetail[ViewMemberDetails.mainName],
        '',
        this.firmMemberElem,
        'Select a main member'
      );
    }
  }

  protected async fetchAndSetFirmData(
    memberId: string,
    defaultName: string,
    defaultPhone: string,
    element: ElementRef,
    placeholder: string,
    additionalParams: { [key: string]: string } = {}
  ): Promise<void> {
    const tomSelectInstance = this.initializeTomSelect(
      element,
      placeholder,
      additionalParams,
      '',
      '',
      ''
    );

    tomSelectInstance['setValueWithOption']('', '', ''); // Pass the phone value
  }

  protected initializeTomSelect(
    element: ElementRef,
    placeholder: string,
    additionalParams: { [key: string]: string } = {},
    selectedOptionId: string,
    selectedOptionName: string,
    selectedOptionPhone: string
  ): TomSelect {
    this.tomInstance = new TomSelect(element.nativeElement, {
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
            dataObj: JSON.stringify(user),
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
              <span>Member Id:&nbsp;<span class="font-semibold name">${escape(item.id)}</span></span>
              <span>Phone:&nbsp;<span class="font-semibold">${escape(item.phone || '')}</span></span>
              <span class="hidden"><span class="font-semibold data">${escape(item.dataObj || '')}</span></span>
            </div>
          </div>
        `,
      },
    });

    this.tomInstance['setValueWithOption'] = (value: string, label: string, phone: string, data: string) => {
      if (value && label) { // Ensure value and label are not null or undefined
        if (!this.tomInstance.options[value]) {
          this.tomInstance.addOption({ id: value, name: label, phone: phone, dataObj: data || '' });
        }
        this.tomInstance.setValue(value);
      } else {
        console.error('Invalid value or label passed to setValueWithOption:', { value, label });
      }
    };

    return this.tomInstance;
  }

  protected fetchFirmMembers(){
    if(this.formMode == 'edit'){
      debugger;
      let strMembers = this.firmDetail[TblFirms.firmMembers] || '';
      strMembers = strMembers.replaceAll("[", "").replaceAll("]", "");
      if(strMembers.length == 0) {
        this.firmMemberDetails = [];
        return;
      }
      let formDataObj = new FormData();
      formDataObj.append('member_id_in', strMembers);
      fetch(`${ApiUrls.baseApiUrl}api${ApiUrls.getMembers}`, {
        method: 'POST',
        credentials: 'include',
        body: formDataObj
      })
      .then(response => response.json())
      .then(data => {
        this.firmMemberDetails = data.records || [];
      })
      .catch(error => {
        console.error('Error fetching firm members:', error);
      });
    }
  }

  protected removeFirmMember(index: number) {
    if (index >= 0 && index < this.firmMemberDetails.length) {
      this.firmMemberDetails.splice(index, 1);
    }
  }

  protected getProfilePicPath(profilePic: string, memberGender: string): string {
    return this.appService.getProfileImagePath(profilePic, memberGender);
  }

  protected onFirmMemberSelected() {
    var element = document.querySelector("#firm_member-ts-dropdown .selected");
    console.log(JSON.parse(element.querySelector(".data").innerHTML));
    var data = JSON.parse(element.querySelector(".data").innerHTML);
    if(data != null && data != undefined) {
      let isMemberPresent = this.firmMemberDetails.some(member => member[ViewMemberDetails.memberId] === data[ViewMemberDetails.memberId]);
      if(!isMemberPresent) {  
        this.firmMemberDetails.push(data);
      }
    }
  }
}
