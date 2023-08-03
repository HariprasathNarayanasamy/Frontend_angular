import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuvComponent } from './muv.component';

describe('MuvComponent', () => {
  let component: MuvComponent;
  let fixture: ComponentFixture<MuvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuvComponent]
    });
    fixture = TestBed.createComponent(MuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
