import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDatabaseInputTemplateComponent } from './app-database-input-template.component';

describe('AppDatabaseInputTemplateComponent', () => {
  let component: AppDatabaseInputTemplateComponent;
  let fixture: ComponentFixture<AppDatabaseInputTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppDatabaseInputTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDatabaseInputTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
