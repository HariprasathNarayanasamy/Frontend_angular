import { ApiService } from './../../../Shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bolero-neo',
  templateUrl: './bolero-neo.component.html',
  styleUrls: ['./bolero-neo.component.css']
})
export class BoleroNeoComponent implements OnInit {

  model_name: string='Bolero-NEO';
  viewCarModelName: any;
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.viewCarModelName(this.model_name).subscribe(data => {
      this.viewCarModelName = data;
  })
  }
  saveModel_id(model_id: any){
    localStorage.setItem('model_id',(model_id));
  }

}
