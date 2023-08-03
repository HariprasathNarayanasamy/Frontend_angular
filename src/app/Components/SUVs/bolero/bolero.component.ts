import { MatSnackBar } from '@angular/material/snack-bar';
import { addcarModel } from './../../add-edit-car/addcars/addcar.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from './../../../Shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bolero',
  templateUrl: './bolero.component.html',
  styleUrls: ['./bolero.component.css']
})
export class BoleroComponent implements OnInit { 

  formValue !: FormGroup;
  addcarModelobj : addcarModel = new addcarModel();
  model_name: string='Bolero';
  viewCarModelName: any;
  constructor(private ApiService: ApiService,
    private FormBuilder: FormBuilder,
    private _snackBar: MatSnackBar){ }

  ngOnInit(): void {
    this.ApiService.viewCarModelName(this.model_name).subscribe(data =>{
      this.viewCarModelName = data;
    })

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

    this.ApiService.postcar(this.addcarModelobj)
    .subscribe(res=>{
      this._snackBar.open("Model ID Created Successfully");
    },
    err=>{
      this._snackBar.open("Something Went Wrong")
    })
  }
  saveModel_id(model_id: any){
    localStorage.setItem('model_id',(model_id))
  }


    
}

  
