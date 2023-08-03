import { ApiService } from './../../../Shared/api.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-scorpio-n',
  templateUrl: './scorpio-n.component.html',
  styleUrls: ['./scorpio-n.component.css']
})
export class ScorpioNComponent implements OnInit {

  model_name: string='Scorpio-N';
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
