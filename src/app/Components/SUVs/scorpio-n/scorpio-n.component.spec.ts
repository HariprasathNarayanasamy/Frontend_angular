import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorpioNComponent } from './scorpio-n.component';

describe('ScorpioNComponent', () => {
  let component: ScorpioNComponent;
  let fixture: ComponentFixture<ScorpioNComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScorpioNComponent]
    });
    fixture = TestBed.createComponent(ScorpioNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
