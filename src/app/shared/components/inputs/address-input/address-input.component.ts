import { Component } from '@angular/core';
import { SimpleInputComponent } from 'simplify-angular';

@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrl: './address-input.component.scss'
})
export class AddressInputComponent extends SimpleInputComponent{
  dragging:boolean = false;
  labelOptions:any[] = ["Mobile","Landline","Office"];
}
