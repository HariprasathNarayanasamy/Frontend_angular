import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../Shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-off-road',
  templateUrl: './off-road.component.html',
  styleUrls: ['./off-road.component.css']
})
export class OffRoadComponent implements OnInit {


  model_type: string='off road';
  viewCarModels: any;
  constructor(private ApiService : ApiService,
    private ActivatedRoute : ActivatedRoute,
    private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.ApiService.viewCarModels(this.model_type).subscribe(data => {
      this.viewCarModels = data;
    })
  }
  saveModel_id(model_id: any){
    localStorage.setItem('model_id',(model_id));
  }

}
