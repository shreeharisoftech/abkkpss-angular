import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../shared/components/components.module';
import { GoverningBodyListComponent } from './governing-body-list/governing-body-list.component';

export const routes: Routes = [
  { path: '', component: GoverningBodyListComponent },
];

@NgModule({
  declarations: [],
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class GoverningBodyModule { }
