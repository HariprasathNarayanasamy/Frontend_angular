import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './../../../Shared/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { addcarModel } from './addcar.model';

@Component({
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.css']
})
export class AddcarsComponent implements OnInit {


  formValue !: FormGroup;
  addcarModelobj : addcarModel = new addcarModel();
  constructor(private FormBuilder: FormBuilder, private api : ApiService,
    private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.formValue = this.FormBuilder.group({
      "model_name": [''],
      "model_type": [''],
      "transmission": [''],
      "fuel_type": [''],
      "trim": ['']
    })
  }
  selectChangeHandler (event:any){
    this.formValue = event.target.value;
  }

  postCarDetails(){
    this.addcarModelobj.model_name=this.formValue.value.model_name;
    this.addcarModelobj.model_type=this.formValue.value.model_type;
    this.addcarModelobj.transmission=this.formValue.value.transmission;
    this.addcarModelobj.fuel_type=this.formValue.value.fuel_type;
    this.addcarModelobj.trim=this.formValue.value.trim;

    this.api.postcar(this.addcarModelobj)
    .subscribe(res=>{
      this._snackBar.open("Car Model added successfully");
    },
    err=>{
      this._snackBar.open("Unable to Create carmodel")
    })
  }
  clearForm() {
    this.formValue.reset({
      'modal_name': '',
      'model_type': '',
      'transmission': '',
      'fuel_type': '',
      'trim': ''
    });
  }
}
