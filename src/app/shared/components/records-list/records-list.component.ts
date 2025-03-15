import { Component, Input } from '@angular/core';

export interface RecordsListAction{
  label?:string,
  icon?:string,
  callback?:Function
}

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrl: './records-list.component.scss'
})
export class RecordsListComponent {
  @Input() title:string = "Records";
  @Input() actions:RecordsListAction[] = [];
  records:any[] = [];
}

