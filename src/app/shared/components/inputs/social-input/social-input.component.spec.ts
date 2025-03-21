import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialInputComponent } from './social-input.component';

describe('SocialInputComponent', () => {
  let component: SocialInputComponent;
  let fixture: ComponentFixture<SocialInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
