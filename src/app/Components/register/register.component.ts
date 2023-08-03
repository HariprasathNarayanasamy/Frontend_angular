import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/Shared/api.service';
import { registerModel } from './register.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{

  viewUser: any;
  user_id: string='';
  formValue !: FormGroup;
  registerModelobj : registerModel = new registerModel();
  constructor(private Formbuilder: FormBuilder, private ApiService : ApiService,
    private _snackBar: MatSnackBar, public Router: Router){}
  

  ngOnInit(): void {


    this.formValue = this.Formbuilder.group({
      "user_name" : [''],
      "email" : [''],
      "role" : [''],
      "phone_number": [''],
      "password" : [''],
    });

  }
  selectChangeHandler (event:any){
    this.formValue= event.target.value;
}


  postUserDetails(){
    this.registerModelobj.user_name=this.formValue.value.user_name;
    this.registerModelobj.email=this.formValue.value.email;
    this.registerModelobj.role=this.formValue.value.role;
    this.registerModelobj.phone_number=this.formValue.value.phone_number;
    this.registerModelobj.password=this.formValue.value.password;

    this.ApiService.postuser(this.registerModelobj)
    .subscribe(res=>{
      console.log(res);
      this._snackBar.open("User created successfully");
      // alert("user added successfully")
      
      
    },
    err=>{
      console.log("Something Went Worng")
      this._snackBar.open("Unable to create user")

    })
  }

  
  
}
