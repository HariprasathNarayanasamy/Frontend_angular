import { ApiService } from 'src/app/Shared/api.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {

  viewallbookedcars: any;
  viewOrders: any;
  viewVehicleid: any;
  constructor(private ApiService:ApiService) { }

  ngOnInit(): void {
    this.ApiService.viewOrders().subscribe(data => {
      this.viewOrders = data;
    });

    this.ApiService.viewVehicleid().subscribe(data => {
      this.viewVehicleid = data;
    })

    
  }

  saveOrderid(order_id: any){
    localStorage.setItem("order_id",(order_id))
  }

}
