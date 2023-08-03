import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickuptrucksComponent } from './pickuptrucks.component';

describe('PickuptrucksComponent', () => {
  let component: PickuptrucksComponent;
  let fixture: ComponentFixture<PickuptrucksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickuptrucksComponent]
    });
    fixture = TestBed.createComponent(PickuptrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
