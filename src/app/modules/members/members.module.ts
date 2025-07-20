import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberFormComponent } from './member-form/member-form.component';

export const routes: Routes = [
  { path: '', component: MemberListComponent },
  { path: 'member-detail/:id', component: MemberDetailComponent },
  { path: 'member-form/:mode/:id', component: MemberFormComponent }
];

@NgModule({
  declarations: [
  ],
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class MembersModule { }
