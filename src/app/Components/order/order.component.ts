import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './../../Shared/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { orderModel } from './order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  formValue !: FormGroup;
  orderModelobj : orderModel = new orderModel();
  constructor(private FormBuilder: FormBuilder, private api : ApiService,
    private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    let model_id = localStorage.getItem("model_id")
    let transaction_id = localStorage.getItem("transaction_id")
    let offer_id = localStorage.getItem("offer_id")
    let email = localStorage.getItem("email")
    this.formValue = this.FormBuilder.group({
      "model_id": [model_id],
      "email":[email],
      "transaction_id":[transaction_id],
      "offer_id":[offer_id],
      "colour":['']
    })
  }
  selectChangeHandler (event:any){
    this.formValue = event.target.value;
  }

  postOrderDetails(){
    this.orderModelobj.model_id=this.formValue.value.model_id;
    this.orderModelobj.email=this.formValue.value.email;
    this.orderModelobj.transaction_id=this.formValue.value.transaction_id;
    this.orderModelobj.offer_id=this.formValue.value.offer_id;
    this.orderModelobj.colour=this.formValue.value.colour;

    this.api.postorder(this.orderModelobj)
    .subscribe(res=>{
      this._snackBar.open("Your order placed successfully");
    },
    err=>{
      this._snackBar.open("Unable to place your order")
    })
  }
  clearForm() {
    this.formValue.reset({
      'model_id': '',
      'email': '',
      'transaction_id': '',
      'offer_id': '',
      'colour': ''
    });
  }
}
