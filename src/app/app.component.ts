import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import KTComponents from '../theme/core/index';
import { KTLayout } from '../theme/app/layouts/layout';

@Component({
	selector: 'app-root',
	standalone: false,
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {
	@HostBinding('class') hostClass = 'flex grow';

  constructor(){

  }

	ngAfterViewInit(): void {
    setInterval(() => {
		KTComponents.init();
    KTLayout.init();
    }, 100);
	}

	ngOnInit(): void {
	}
}

