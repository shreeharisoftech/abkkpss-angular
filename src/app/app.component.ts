import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import KTComponents from '../theme/core/index';
import { KTLayout } from '../theme/app/layouts/layout';
import { ISimpleDatabaseInputResolutionFunctionParams, SimpleDatabase, SimpleDatabaseColumn, SimpleDatabaseInput, SimpleDataDictionary, SimpleHttp } from '@satvasoftech/simplify-angular';
import { DataDictionary } from './core/database/data-dictionary';
import { AppDatabaseInputTemplateComponent } from './shared/components/app-database-input-template/app-database-input-template.component';

@Component({
	selector: 'app-root',
	standalone: false,
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {
	@HostBinding('class') hostClass = 'flex grow';

  constructor(){
    SimpleHttp.baseUrl = 'https://abkkpss.localhost/api';
    SimpleDataDictionary.registerDataDictionary(DataDictionary);
    this.setSimpleDatabase();
  }

	ngAfterViewInit(): void {
    setInterval(() => {
		KTComponents.init();
    KTLayout.init();
    }, 100);
	}

	ngOnInit(): void {
	}

  setSimpleDatabase() {
    // SimpleDatabaseColumn.typeColumnConfigurations[SimpleDatabase.typeAutoNumber] = { "class": "text-center" };
    // SimpleDatabaseColumn.typeColumnConfigurations[SimpleDatabase.typeDate] = { "class": "text-center",formatDate:"DISPLAY"};
    // SimpleDatabaseColumn.typeColumnConfigurations[SimpleDatabase.typeDateTime] = { "class": "text-center", formatDateTime: "DD/MM/YYYY HH:mm A"};
    // SimpleDatabaseColumn.typeColumnConfigurations[SimpleDatabase.typeDouble] = { "class": "text-center","visible": true };
    // SimpleDatabaseColumn.typeColumnConfigurations[SimpleDatabase.typeInt] = { "class": "text-center","visible": true };
    // SimpleDatabaseColumn.typeColumnConfigurations[SimpleDatabase.typeJson] = { "visible": false, sort: false, excludeField:true };
    // SimpleDatabaseColumn.typeColumnConfigurations[SimpleDatabase.typeMediaJson] = { "visible": false, sort: false, "class": "text-center", ngComponent: SelectListAttachmentComponent };
    // SimpleDatabaseColumn.typeColumnConfigurations[SimpleDatabase.typePassword] = { "visible": false, excludeField:true };
    // SimpleDatabaseColumn.typeColumnConfigurations[SimpleDatabase.typeUserDefinedFunction] = { "visible": false, excludeField:true };
    // SimpleDatabaseColumn.columnResolutionFunction = (params: any) => {
    //   let result: any;
    //   let fieldDetails: any = params.fieldDetails;
    //   let fieldProperties: any = params.fieldProperties;
    //   let tableName: string = params.tableName;
    //   let simpleDatabase: SimpleDatabase = SimpleDataDictionary.getSimpleDatabaseTable(tableName);
    //   let dataField: string = fieldDetails[SimpleDatabase.fieldName];
    //   if (dataField == "action") {
    //     result = {
    //       title: 'Action',
    //       filter: false,
    //       sort: false,
    //       ngComponent: ActionColumnComponent
    //     };
    //   }
    //   if (fieldProperties[SimpleDatabase.propertyFieldRemarks]) {
    //     let remarks: string = fieldProperties[SimpleDatabase.propertyFieldRemarks];
    //     let remarkTags: string[] = remarks.split(",");
    //     for (let tag of remarkTags) {
    //       if (tag == "status_field") {
    //         result = {
    //           title: simpleDatabase.getFieldTitle(dataField),
    //           class: 'text-center',
    //           ngComponent: SelectOptionDisplayComponent,
    //           ngComponentProperties: { tableName: tableName }
    //         };
    //       }
    //     }

    //   }
    //   return result;
    // }
    SimpleDatabaseInput.inputTemplateComponent = AppDatabaseInputTemplateComponent;
    // SimpleDatabaseInput.typeInputComponents[SimpleDatabase.typeMediaJson] = { inputComponent: AttachmentUploadComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.accounts] = { inputComponent: SelectAccountInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.assets] = { inputComponent: SelectAssetInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.companies] = { inputComponent: SelectCompanyInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.customers] = { inputComponent: SelectCustomerInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.docks] = { inputComponent: SelectDockInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.employees] = { inputComponent: SelectEmployeeInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.itemCategories] = { inputComponent: SelectItemCategoryInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.items] = { inputComponent: SelectItemInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.locations] = { inputComponent: SelectLocationInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.paymentMethods] = { inputComponent: SelectPaymentMethodInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.pricingGroups] = { inputComponent: SelectPricingGroupInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.projectServices] = { inputComponent: SelectProjectServiceInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.projectServiceInputGroups] = { inputComponent: SelectProjectServiceInputGroupComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.purchaseTerms] = { inputComponent: SelectPurchaseTermInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.saleTerms] = { inputComponent: SelectSaleTermInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.shippingCompanies] = { inputComponent: SelectShippingCompanyInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.taxes] = { inputComponent: SelectTaxInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.users] = { inputComponent: SelectUserInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.vendors] = { inputComponent: SelectVendorInputComponent };
    // SimpleDatabaseInput.foreignKeyInputs[Tables.storageLocations] = { inputComponent: SelectStorageLocationInputComponent };
    // SimpleDatabaseInput.inputResolutionFunction = (params: ISimpleDatabaseInputResolutionFunctionParams) => {
    //   let result: any;
    //   let fieldDetails: any = params.fieldDetails;
    //   let fieldType:string = fieldDetails[SimpleDatabase.fieldType];
    //   let fieldProperties: any = params.fieldProperties;
    //   let tableDetails: any = params.simpleDatabaseInstance;
    //   let tableName: string = tableDetails[SimpleDatabase.tableName];
    //   let dataField: any = fieldDetails[SimpleDatabase.fieldName];
    //   let inputTemplate:AppDatabaseInputTemplateComponent = params.templateInstance;
    //   // if (dataField == TblCurrencies.currencyCode && tableName != Tables.currencies) {
    //   //   result = SelectCurrencyCodeInputComponent;
    //   // }
    //   // else if (dataField == TblCustomers.addressDetails) {
    //   //   result = AddressDetailsComponent;
    //   // }
    //   // else if (dataField == TblCustomers.emailDetails) {
    //   //   result = EmailDetailsComponent;
    //   // }
    //   // else if (dataField == TblCustomers.phoneDetails) {
    //   //   result = PhoneDetailsComponent;
    //   // }
    //   // else if (dataField == TblCustomers.websiteDetails) {
    //   //   result = WebsiteDetailsComponent;
    //   // }
    //   // else if (dataField == TblCustomers.faxDetails) {
    //   //   result = FaxDetailsComponent;
    //   // }
    //   // else if (dataField == TblCustomers.legalDetails) {
    //   //   result = LegalDetailsComponent;
    //   // }
    //   // else if (dataField == TblCustomers.bankDetails) {
    //   //   result = BankDetailsComponent;
    //   // }
    //   // else if (dataField == TblCustomers.socialDetails) {
    //   //   result = SocialMediaDetailsComponent;
    //   // }
    //   // else if ([TblCustomers.remarks, TblSaleAppointments.requestRemarks, TblSaleAppointments.responseRemarks].includes(dataField)) {
    //   //   result = SimpleInputTextareaComponent;
    //   // }
    //   // else if (dataField == TblCustomers.attachments) {
    //   //   result = AttachmentUploadComponent;
    //   //   if(inputTemplate.additionalDetails){
    //   //     if(inputTemplate.additionalDetails["inputFor"]){
    //   //       if(inputTemplate.additionalDetails["inputFor"]=="document"){
    //   //         result = SelectListAttachmentComponent;
    //   //         inputTemplate.inputProperties["displayOnly"] = false;
    //   //       }
    //   //     }
    //   //   }
    //   // }
    //   // else if (dataField == TblEmployees.passportDetails) {
    //   //   result = PassportDetailsComponent;
    //   // }
    //   // else if (dataField == TblEmployees.visaDetails) {
    //   //   result = VisaDetailsComponent;
    //   // }
    //   // else if (dataField == TblEmployees.visaDetails) {
    //   //   result = VisaDetailsComponent;
    //   // }
    //   // else if(dataField == TblPurchaseOrders.remarksForVendor){
    //   //   result = SimpleInputTextareaComponent;
    //   // }
    //   // // console.log("Checking field : " + dataField, fieldDetails);
    //   // if (fieldProperties[SimpleDatabase.propertyFieldRemarks]) {
    //   //   let remarks: string = fieldProperties[SimpleDatabase.propertyFieldRemarks];
    //   //   let remarkTags: string[] = remarks.split(",");
    //   //   for (let tag of remarkTags) {
    //   //     if (tag == "status_field") {
    //   //       result = SelectStatusInputComponent;
    //   //     }
    //   //   }
    //   // }
    //   return result;
    // }
  }
}

