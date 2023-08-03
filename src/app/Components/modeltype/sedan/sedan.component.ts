import { ApiService } from './../../../Shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sedan',
  templateUrl: './sedan.component.html',
  styleUrls: ['./sedan.component.css']
})
export class SedanComponent implements OnInit {

  model_type: string='Sedan';
  viewCarModels: any;
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.viewCarModels(this.model_type).subscribe(data => {
      this.viewCarModels = data;
    })
    
  }
  saveModel_id(model_id: any){
    localStorage.setItem('model_id',(model_id));
  }

}
