import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcarsComponent } from './allcars.component';

describe('AllcarsComponent', () => {
  let component: AllcarsComponent;
  let fixture: ComponentFixture<AllcarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllcarsComponent]
    });
    fixture = TestBed.createComponent(AllcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
