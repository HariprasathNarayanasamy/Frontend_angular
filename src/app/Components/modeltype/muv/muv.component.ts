import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './../../../Shared/api.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-muv',
  templateUrl: './muv.component.html',
  styleUrls: ['./muv.component.css']
})
export class MuvComponent implements OnInit {

  model_type: string='MUV';
  viewCarModels: any;
  constructor(private ApiService : ApiService,
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
