import { Component } from '@angular/core';
import { SimpleInputComponent } from 'simplify-angular';

@Component({
  selector: 'app-social-input',
  templateUrl: './social-input.component.html',
  styleUrl: './social-input.component.scss'
})
export class SocialInputComponent extends SimpleInputComponent{
  dragging:boolean = false;
  labelOptions:any[] = ["Mobile","Landline","Office"];
}
