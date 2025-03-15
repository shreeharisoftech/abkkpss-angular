import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsListComponent } from './records-list/records-list.component';
import { ModalComponent } from './modal/modal.component';
import { BaseMasterComponent } from '../base-parents/base-master/base-master.component';
import { AddressInputComponent } from './inputs/address-input/address-input.component';
import { BankInputComponent } from './inputs/bank-input/bank-input.component';
import { EmailInputComponent } from './inputs/email-input/email-input.component';
import { FaxInputComponent } from './inputs/fax-input/fax-input.component';
import { LegalInputComponent } from './inputs/legal-input/legal-input.component';
import { PhoneInputComponent } from './inputs/phone-input/phone-input.component';
import { SocialInputComponent } from './inputs/social-input/social-input.component';
import { WebsiteInputComponent } from './inputs/website-input/website-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { CdkDropList, CdkDrag, CdkDragPlaceholder, CdkDragHandle } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AddressInputComponent,
    BankInputComponent,
    BaseMasterComponent,
    EmailInputComponent,
    FaxInputComponent,
    LegalInputComponent,
    ModalComponent,
    PhoneInputComponent,
    RecordsListComponent,
    SocialInputComponent,
    WebsiteInputComponent
  ],
  exports: [
    AddressInputComponent,
    BankInputComponent,
    BaseMasterComponent,
    EmailInputComponent,
    FaxInputComponent,
    LegalInputComponent,
    ModalComponent,
    PhoneInputComponent,
    RecordsListComponent,
    SocialInputComponent,
    WebsiteInputComponent
  ],
  imports: [
    CdkDrag,
    CdkDragHandle,
    CdkDragPlaceholder,
    CdkDropList,
    CommonModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }
