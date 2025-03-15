import { Component, ElementRef } from '@angular/core';
import { SimpleBaseClass, SimpleHttp, SimplifyAngularModule, SimplifyService } from '@satvasoftech/simplify-angular';
import { AppService } from '../../../core/services/app.service';
@Component({
  selector: 'app-base-component',
  standalone: false,
  template: '<div></div>',
})
export class AppBaseComponent extends SimpleBaseClass{
  simpleHttp:SimpleHttp;
  constructor(elementRef:ElementRef,simplify:SimplifyService,public appService:AppService){
    super(elementRef,simplify);
    this.simpleHttp = appService.simpleHttp;
  }
}
