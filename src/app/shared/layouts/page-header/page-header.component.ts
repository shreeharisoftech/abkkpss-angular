import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuItemComponent } from './header-menu-item/header-menu-item.component';
import { AppService } from '../../../core/services/app.service';

@Component({
	selector: 'app-page-header',
	standalone: true,
	imports: [
    CommonModule,
    HeaderMenuItemComponent
  ],
	templateUrl: './page-header.component.html',
	styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
	@HostBinding('class') hostClass = 'header fixed top-0 z-10 left-0 right-0 flex items-stretch shrink-0 bg-[#fefefe] dark:bg-coal-500 shadow-sm dark:border-b dark:border-b-coal-100';
	@HostBinding('attr.role') hostRole = 'banner';
	@HostBinding('attr.data-sticky') dataSticky = 'true';
	@HostBinding('attr.data-sticky-name') dataStickyName = 'header';
	@HostBinding('id') hostId = 'header';
  AppService = AppService;
  constructor(){

  }
}
