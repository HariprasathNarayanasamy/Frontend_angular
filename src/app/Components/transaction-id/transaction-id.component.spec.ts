import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionIdComponent } from './transaction-id.component';

describe('TransactionIdComponent', () => {
  let component: TransactionIdComponent;
  let fixture: ComponentFixture<TransactionIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionIdComponent]
    });
    fixture = TestBed.createComponent(TransactionIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
