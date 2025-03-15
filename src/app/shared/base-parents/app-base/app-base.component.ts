import { Component } from '@angular/core';
import { SimpleHttp } from '@satvasoftech/simplify-angular';
import { AppService } from '../../../core/services/app.service';
@Component({
  selector: 'app-base-component',
  standalone: false,
  template: '<div></div>',
})
export class AppBaseComponent{
  simpleHttp:SimpleHttp;
  constructor(public appService:AppService){
    this.simpleHttp = appService.simpleHttp;
  }
}
