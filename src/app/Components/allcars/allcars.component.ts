import { ApiService } from './../../Shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcars',
  templateUrl: './allcars.component.html',
  styleUrls: ['./allcars.component.css']
})
export class AllcarsComponent implements OnInit {

  viewCarModels: any;
  model: any;
  constructor(private ApiService:ApiService) { }

  ngOnInit(): void {
    
  }
  saveData(model_id: any){
      localStorage.setItem('data',(model_id));
    }
  
}

