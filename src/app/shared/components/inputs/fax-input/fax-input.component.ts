import { Component } from '@angular/core';
import { SimpleInputComponent } from 'simplify-angular';

@Component({
  selector: 'app-fax-input',
  templateUrl: './fax-input.component.html',
  styleUrl: './fax-input.component.scss'
})
export class FaxInputComponent extends SimpleInputComponent{
  dragging:boolean = false;
  labelOptions:any[] = ["Mobile","Landline","Office"];
}
