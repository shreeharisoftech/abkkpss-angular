import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../../../core/services/app.service';
import { AppBaseComponent } from '../../base-parents/app-base/app-base.component';
import { SimplifyService } from '@satvasoftech/simplify-angular';

@Component({
  selector: 'app-list-card',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss'
})
export class ListCardComponent extends AppBaseComponent {
  @Input()
  title? = "";

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

  @Input()
  cardType: 'member' | 'firm' = 'member';

  @Input()
  city?: string;

  constructor(elementRef: ElementRef, simplify: SimplifyService, appService: AppService) {
    super(elementRef, simplify, appService);
  }
}
