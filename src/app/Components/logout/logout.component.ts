import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../Shared/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { logoutModel } from './logout.model';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  formValue !: FormGroup;
  logoutTokenidobj : logoutModel = new logoutModel();
  logoutUser: any;
  constructor(private ApiService:ApiService,
    private FormBuilder : FormBuilder,
    private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let email = localStorage.getItem("email")

    this.formValue = this.FormBuilder.group({
      "email": [email]
    });
  }
  selectChangleHandler (event:any){
    this.formValue = event.target.value;
  }

  logoutUserDetails(){
    this.logoutTokenidobj.email=this.formValue.value.email;

    this.ApiService.logoutUser(this.logoutTokenidobj)
    .subscribe(res=>{
      console.log(res);
      alert("User Logged Out")
    },
    err=>{
      alert("")
    })
  }
}
