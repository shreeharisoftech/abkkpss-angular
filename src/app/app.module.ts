import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ErrorHandler, NgModule, isDevMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './shared/layouts/page-header/page-header.component';
import { routes } from './app.routes';
@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports:[
    RouterModule
  ],
  imports: [
    PageHeaderComponent,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: true
    }),
  ],
    providers: [
      {
        provide: ErrorHandler,
      },
      provideHttpClient(withInterceptorsFromDi()),
    ]
})
export class AppModule { }
