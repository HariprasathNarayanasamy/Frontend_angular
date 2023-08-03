import { Router } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { ApiService } from './../../Shared/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { loginModel } from './login.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formValue !: FormGroup;
  loginModelobj : loginModel = new loginModel();
  constructor(private FormBuilder: FormBuilder, private api : ApiService,
    public Router: Router){}

  ngOnInit(): void {
    this.formValue = this.FormBuilder.group({
      "email" : [''],
      "password": ['']
    })
  }
  selectChangeHandler (event:any) {
    this.formValue= event.target.value;
  }

  postLoginDetails(){
    this.loginModelobj.email=this.formValue.value.email;
    this.loginModelobj.password=this.formValue.value.password;



    if(this.loginModelobj)
      this.api.postlogin(this.loginModelobj)
      .subscribe(res=>{
        console.log(res)
        alert("Login successful")
        this.Router.navigate(['/'])
    },
    err=>{
      console.log(err)
      alert("Invalid User")
      this.Router.navigate(['/login'])
    })

  }
  saveEmail(email: any){
    localStorage.setItem('email',(email));
  }

}

  