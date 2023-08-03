import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercontentComponent } from './usercontent.component';

describe('UsercontentComponent', () => {
  let component: UsercontentComponent;
  let fixture: ComponentFixture<UsercontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsercontentComponent]
    });
    fixture = TestBed.createComponent(UsercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
