import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoleroComponent } from './bolero.component';

describe('BoleroComponent', () => {
  let component: BoleroComponent;
  let fixture: ComponentFixture<BoleroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoleroComponent]
    });
    fixture = TestBed.createComponent(BoleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
