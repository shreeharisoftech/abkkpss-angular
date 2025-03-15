import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaxInputComponent } from './fax-input.component';

describe('FaxInputComponent', () => {
  let component: FaxInputComponent;
  let fixture: ComponentFixture<FaxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaxInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
