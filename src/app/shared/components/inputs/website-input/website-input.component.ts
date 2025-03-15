import { Component } from '@angular/core';
import { SimpleInputComponent } from 'simplify-angular';

@Component({
  selector: 'app-website-input',
  templateUrl: './website-input.component.html',
  styleUrl: './website-input.component.scss'
})
export class WebsiteInputComponent extends SimpleInputComponent{
  dragging:boolean = false;
  labelOptions:any[] = ["Mobile","Landline","Office"];
}
