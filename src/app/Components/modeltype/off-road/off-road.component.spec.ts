import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffRoadComponent } from './off-road.component';

describe('OffRoadComponent', () => {
  let component: OffRoadComponent;
  let fixture: ComponentFixture<OffRoadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffRoadComponent]
    });
    fixture = TestBed.createComponent(OffRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
