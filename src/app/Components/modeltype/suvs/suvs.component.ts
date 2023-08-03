import { ApiService } from './../../../Shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suvs',
  templateUrl: './suvs.component.html',
  styleUrls: ['./suvs.component.css']
})
export class SuvsComponent implements OnInit {


  model_name: string='';
  viewCarModels: any;
  ViewCarModelName: any;
  constructor(private ApiService: ApiService) { }


  ngOnInit(): void {
    this.ApiService.viewCarSUVs().subscribe(data => {
      this.viewCarModels = data;
    })

    // this.ApiService.viewCarModelName(this.model_name).subscribe(data =>{
    //   this.ViewCarModelName = data;
    // })
    
  }
  saveModel_id(model_id: any){
    localStorage.setItem('model_id',(model_id));
  }
}
