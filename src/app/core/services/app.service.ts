import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SimpleHttp } from '@satvasoftech/simplify-angular';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  static appMenu:any[] = [
    {
      "iconClass":"far fa-users",
      "label":"Members",
      "link":"members"
    },
    {
      "iconClass":"far fa-building",
      "label":"Firms",
      "link":"firms"
    },
    {
      "iconClass":"far fa-rings-wedding",
      "label":"Matrimony",
      "link":"matrimony"
    },
  ];
  simpleHttp:SimpleHttp = new SimpleHttp();
  constructor() {
  }

}
