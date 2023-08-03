import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorpioClassicComponent } from './scorpio-classic.component';

describe('ScorpioClassicComponent', () => {
  let component: ScorpioClassicComponent;
  let fixture: ComponentFixture<ScorpioClassicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScorpioClassicComponent]
    });
    fixture = TestBed.createComponent(ScorpioClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
