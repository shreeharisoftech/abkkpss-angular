import { Component } from '@angular/core';
import { SimpleInputComponent } from 'simplify-angular';

@Component({
  selector: 'app-legal-input',
  templateUrl: './legal-input.component.html',
  styleUrl: './legal-input.component.scss'
})
export class LegalInputComponent extends SimpleInputComponent{
  dragging:boolean = false;
  labelOptions:any[] = ["Mobile","Landline","Office"];
}
