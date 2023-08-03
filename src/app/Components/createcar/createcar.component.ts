import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './../../Shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { addorderModel } from './addorderModel';

@Component({
  selector: 'app-createcar',
  templateUrl: './createcar.component.html',
  styleUrls: ['./createcar.component.css']
})
export class CreatecarComponent implements OnInit {


  formValue !: FormGroup;
  addorderModelobj : addorderModel = new addorderModel();
  constructor(private FormBuilder:FormBuilder, private ApiService:ApiService,
    private _snackBar: MatSnackBar){ }

    
  ngOnInit(): void {
    let order_id = localStorage.getItem("order_id")

    this.formValue = this.FormBuilder.group({
      "order_id":[order_id]
    })
  }
  selectChangeHandler (event:any){
    this.formValue = event.target.value;
  }
  postBookedDetails(){
    this.addorderModelobj.order_id=this.formValue.value.order_id;

    this.ApiService.postbookedcars(this.addorderModelobj)
    .subscribe(res=>{
      this._snackBar.open("car created");
    },
    err=>{
      this._snackBar.open("Car already created")
    })
  }
}
