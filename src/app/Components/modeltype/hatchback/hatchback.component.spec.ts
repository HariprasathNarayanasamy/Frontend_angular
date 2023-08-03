import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatchbackComponent } from './hatchback.component';

describe('HatchbackComponent', () => {
  let component: HatchbackComponent;
  let fixture: ComponentFixture<HatchbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HatchbackComponent]
    });
    fixture = TestBed.createComponent(HatchbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
