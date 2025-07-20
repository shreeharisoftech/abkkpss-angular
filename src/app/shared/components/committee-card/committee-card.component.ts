import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppBaseComponent } from '../../base-parents/app-base/app-base.component';
import { SimplifyService } from '@satvasoftech/simplify-angular';
import { AppService } from '../../../core/services/app.service';

@Component({
  selector: 'app-committee-card',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './committee-card.component.html',
  styleUrl: './committee-card.component.scss'
})
export class CommitteeCardComponent extends AppBaseComponent {
  @Input()
  profileImageUrl?: string;

  @Input()
  name?: string;

  @Input()
  designation?: string;

  @Input()
  redirectUrl?: string;

  @Input()
  city?: string;

  @Input()
  showDesignation: boolean = true;
  constructor(elementRef: ElementRef
    , simplify: SimplifyService, appService: AppService) {
    super(elementRef, simplify, appService);
  }
}
