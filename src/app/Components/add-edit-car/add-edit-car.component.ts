import { ApiService } from './../../Shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './add-edit-car.component.html',
  styleUrls: ['./add-edit-car.component.css']
})
export class AddEditCarComponent implements OnInit {

  viewcarmodels: any;
  constructor(private ApiService:ApiService) { }

  ngOnInit(): void {
    this.ApiService.viewcarmodels().subscribe(data => {
      this.viewcarmodels = data;
    });
  }

  saveModelid(model_id: any){
    localStorage.setItem("model_id",(model_id))
  }
}
