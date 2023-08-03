import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './../../../Shared/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component,OnInit } from '@angular/core';
import { addpriceModel } from './addprice.model';

@Component({
  selector: 'app-addprice',
  templateUrl: './addprice.component.html',
  styleUrls: ['./addprice.component.css']
})
export class AddpriceComponent implements OnInit {


  formValue !: FormGroup;
  addpriceModelobj : addpriceModel = new addpriceModel();
  constructor(private FormBuilder: FormBuilder, private api : ApiService,
    private _snackBar: MatSnackBar){}


  ngOnInit(): void {

    let model_id = localStorage.getItem("model_id")


    this.formValue = this.FormBuilder.group({
      "model_id" : [model_id],
      "price" : [''],
      "start_date": [''],
      "end_date": [''],
    })
  }
  selectChangeHandler (event:any){
    this.formValue = event.target.value;
  }


  postPriceDetails(){
    this.addpriceModelobj.model_id=this.formValue.value.model_id;
    this.addpriceModelobj.price=this.formValue.value.price;
    this.addpriceModelobj.start_date=this.formValue.value.start_date;
    this.addpriceModelobj.end_date=this.formValue.value.end_date;

    this.api.postprice(this.addpriceModelobj)
    .subscribe(res=>{
      this._snackBar.open("price added");

    },
    err=>{
      this._snackBar.open("Unable to add price")
    })
  }
}
