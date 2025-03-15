import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { AppDatabaseInputTemplateComponent } from './app-database-input-template/app-database-input-template.component';
import { SimplifyAngularModule } from '@satvasoftech/simplify-angular';

@NgModule({
  declarations: [
    AppDatabaseInputTemplateComponent,
  ],
  exports: [
    AppDatabaseInputTemplateComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    SimplifyAngularModule,
  ]
})
export class ComponentsModule { }
