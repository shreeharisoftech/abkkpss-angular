import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListZonesComponent } from './list-zones/list-zones.component';
import { DirectoryMemberlistComponent } from './directory-memberlist/directory-memberlist.component';

export const routes: Routes = [
  { path: '', component: ListZonesComponent },
  { path: 'directory-memberlist/:id', component: DirectoryMemberlistComponent }
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
