import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/Shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { edituserModel } from './edit-user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user_id: string = '';
  formValue !: FormGroup;
  edituserModelobj : edituserModel = new edituserModel();
  constructor(private ActivatedRoute: ActivatedRoute,
    private FormBuilder: FormBuilder,
    private ApiService: ApiService,
    private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(data => {
      this.user_id = data['user_id'];
    });
    this.formValue  = this.FormBuilder.group({
      "key": [''],
      "value": ['']
    })
  }
  selectChangeHandler (event:any){
    this.formValue = event.target.value;
  }

  patchuserDetails(){
    this.edituserModelobj.key=this.formValue.value.key;
    this.edituserModelobj.value=this.formValue.value.value;

    this.ApiService.edituser(this.edituserModelobj)
    .subscribe(res=>{
      this._snackbar.open("User data is modified");
    },
    err=>{
      this._snackbar.open("Unable to edit user");
    })
  }
}
