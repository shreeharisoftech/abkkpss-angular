import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberlistCardComponent } from './memberlist-card.component';

describe('MemberlistCardComponent', () => {
  let component: MemberlistCardComponent;
  let fixture: ComponentFixture<MemberlistCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberlistCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberlistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
