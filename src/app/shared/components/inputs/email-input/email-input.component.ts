import { Component } from '@angular/core';
import { SimpleInputComponent } from 'simplify-angular';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss'
})
export class EmailInputComponent extends SimpleInputComponent{
  dragging:boolean = false;
  labelOptions:any[] = ["Mobile","Landline","Office"];
}
