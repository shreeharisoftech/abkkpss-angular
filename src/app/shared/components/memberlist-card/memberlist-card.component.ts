import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../../../core/services/app.service';
import { AppBaseComponent } from '../../base-parents/app-base/app-base.component';
import { SimplifyService } from '@satvasoftech/simplify-angular';

@Component({
  selector: 'app-memberlist-card',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './memberlist-card.component.html',
  styleUrl: './memberlist-card.component.scss'
})
export class MemberlistCardComponent extends AppBaseComponent {
  @Input()
  memberName? = "";

  @Input()
  memberNative? = "";
  
  @Input()
  memberCurrent? = "";

  @Input()
  memberImageUrl? = "";

  @Input()
  redirectUrl? = "";

  @Input()
  isLifeTime = 0;

  @Input()
  memberType? = "";

  constructor(elementRef: ElementRef, simplify: SimplifyService, appService: AppService) {
    super(elementRef, simplify, appService);
  }
}
