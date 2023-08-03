import { ApiService } from './../../Shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-id',
  templateUrl: './transaction-id.component.html',
  styleUrls: ['./transaction-id.component.css']
})
export class TransactionIdComponent implements OnInit {

  
  viewtransaction_id: any;
  transactions: any;
  constructor(private ApiService:ApiService) { }

  ngOnInit(): void {
    this.ApiService.viewtransaction_id().subscribe(data => {
      this.viewtransaction_id = data;

      
    });
  }
  
  saveTransactionid(transaction_id: any){
    localStorage.setItem("transaction_id",(transaction_id))
  }
}
