import { ApiService } from './../../Shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {


  viewalloffers: any;
  constructor(private ApiService:ApiService) { }

  ngOnInit(): void {
    this.ApiService.viewoffers().subscribe(data => {
      this.viewalloffers = data;
    });
  }
  saveData(offers_id: any){
    localStorage.setItem('offer_id',(offers_id));
  }
}
