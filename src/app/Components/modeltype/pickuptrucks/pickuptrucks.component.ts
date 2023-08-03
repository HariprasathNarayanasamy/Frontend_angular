import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../Shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickuptrucks',
  templateUrl: './pickuptrucks.component.html',
  styleUrls: ['./pickuptrucks.component.css']
})
export class PickuptrucksComponent implements OnInit {

  model_type: string='pickuptruck';
  viewCarModels: any;
  constructor(private ApiService : ApiService,
    private ActivatedRoute: ActivatedRoute,
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
