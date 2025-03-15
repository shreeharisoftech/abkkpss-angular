import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadingZeroPipe } from './leading-zero/leading-zero.directive';

@NgModule({
  declarations: [
    LeadingZeroPipe
  ],
  exports: [
    LeadingZeroPipe
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
