import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-memberlist-card',
  imports: [
    RouterModule
  ],
  templateUrl: './memberlist-card.component.html',
  styleUrl: './memberlist-card.component.scss'
})
export class MemberlistCardComponent {
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
}
