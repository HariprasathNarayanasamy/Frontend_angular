import { ApiService } from './../../../Shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xuv700',
  templateUrl: './xuv700.component.html',
  styleUrls: ['./xuv700.component.css']
})
export class XUV700Component implements OnInit {

  model_name: string='XUV700';
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
