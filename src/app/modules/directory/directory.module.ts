import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListZonesComponent } from './list-zones/list-zones.component';

export const routes: Routes = [
  { path: '', component: ListZonesComponent }
];


@NgModule({
  declarations: [
    ListZonesComponent
  ],
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DirectoryModule { }
