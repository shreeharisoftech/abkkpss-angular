import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalInputComponent } from './legal-input.component';

describe('LegalInputComponent', () => {
  let component: LegalInputComponent;
  let fixture: ComponentFixture<LegalInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
