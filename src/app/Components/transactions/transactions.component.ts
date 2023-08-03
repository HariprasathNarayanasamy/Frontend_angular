import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/Shared/api.service';
import { transactionsModel } from './transactions.model';
import { Router } from '@angular/router';
import { timer, timestamp } from 'rxjs';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  data:any;
  formValue !: FormGroup;
  transactionsModelobj : transactionsModel = new transactionsModel();
  constructor(private FormBuilder: FormBuilder, private api: ApiService,
    public Router: Router){}

    currentDate = new Date();
    currentTime = new Date();

  ngOnInit(): void {
    let model_id = localStorage.getItem("model_id");
    let email = localStorage.getItem("email")

    this.formValue = this.FormBuilder.group({
      "model_id": [model_id],
      "email": [email],
      "transaction_amount": [ ],
      "date": [''],
      "timing": [''],
      "account_from": [''],
      "account_to": [''],
    }); 
  }
  selectChangeHandler (event:any){
    this.formValue = event.target.value;
  }
  postTransactionsDetails(){
    
    this.transactionsModelobj.model_id=this.formValue.value.model_id;
    this.transactionsModelobj.email=this.formValue.value.email;
    this.transactionsModelobj.transaction_amount=this.formValue.value.transaction_amount;
    this.transactionsModelobj.date=this.formValue.value.date;
    this.transactionsModelobj.timing=this.formValue.value.timing;
    this.transactionsModelobj.account_from=this.formValue.value.account_from;
    this.transactionsModelobj.account_to=this.formValue.value.account_to;

  
    this.api.posttransaction(this.transactionsModelobj)
    .subscribe(res=>{
      console.log(res);
      alert("Transaction Completed")
      this.Router.navigate(['/transactionID'])
    },
    err=>{
      console.log(err)
      alert("Something Went Worng")
      this.Router.navigate(['/transactions'])
    })
  }
  
  

}
