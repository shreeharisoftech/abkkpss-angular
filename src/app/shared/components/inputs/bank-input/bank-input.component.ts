import { Component } from '@angular/core';
import { SimpleInputComponent } from 'simplify-angular';

@Component({
  selector: 'app-bank-input',
  templateUrl: './bank-input.component.html',
  styleUrl: './bank-input.component.scss'
})
export class BankInputComponent extends SimpleInputComponent{
  dragging:boolean = false;
  labelOptions:any[] = ["Mobile","Landline","Office"];
}
