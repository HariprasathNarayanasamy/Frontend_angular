import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoleroNeoComponent } from './bolero-neo.component';

describe('BoleroNeoComponent', () => {
  let component: BoleroNeoComponent;
  let fixture: ComponentFixture<BoleroNeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoleroNeoComponent]
    });
    fixture = TestBed.createComponent(BoleroNeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
