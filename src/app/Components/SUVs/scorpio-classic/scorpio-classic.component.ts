import { ApiService } from './../../../Shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scorpio-classic',
  templateUrl: './scorpio-classic.component.html',
  styleUrls: ['./scorpio-classic.component.css']
})
export class ScorpioClassicComponent implements OnInit {

  model_name: string='Scorpio Classic';
  viewCarModelName: any;
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.viewCarModelName(this.model_name).subscribe(data =>{
      this.viewCarModelName = data;
    })
  }
  saveModel_id(model_id: any){
    localStorage.setItem('model_id',(model_id));
  }
}
