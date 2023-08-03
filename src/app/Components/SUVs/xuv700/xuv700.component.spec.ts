import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XUV700Component } from './xuv700.component';

describe('XUV700Component', () => {
  let component: XUV700Component;
  let fixture: ComponentFixture<XUV700Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XUV700Component]
    });
    fixture = TestBed.createComponent(XUV700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
