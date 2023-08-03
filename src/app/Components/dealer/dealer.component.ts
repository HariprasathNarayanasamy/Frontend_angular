import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css'],

})
export class DealerComponent implements OnInit{

  formValue !: FormGroup;
  constructor(public Router: Router,
   private FormBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.formValue = this.FormBuilder.group({
      "state" : ['']
    })
  }

  selectChangeHandler (event:any){
    this.formValue = event.target.value;
  }

  saveState(state:any){
    localStorage.setItem("state",(state))
  }

  saveCity(city:any){
    localStorage.setItem("Dealer",(city))
  }

}

