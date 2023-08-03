import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  subscribe(arg0: (data: any) => void) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  postuser(data : any){
    return this.http.post<any>("http://127.0.0.1:8082/userservice/v1/users",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postlogin(data : any){
    return this.http.post<any>("http://127.0.0.1:8082/userservice/v1/users/login",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteuser(data : any){
    return this.http.delete<any>("http://127.0.0.1:8082/userservice/v1/users/"+ data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  edituser(data : any){
    return this.http.patch<any>("http://127.0.0.1:8082/userservice/v1/users/" + data ,{} )
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  viewUser(user_id:any){
    return this.http.get<any>("http://127.0.0.1:8082/userservice/v1/users/view" + user_id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  viewcarmodels(){
    return this.http.get<any>("http://127.0.0.1:8083/marketingservice/v1/cars/models")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  viewallcars(){
    return this.http.get<any>("http://127.0.0.1:8083/marketingservice/v1/cars/models")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  posttransaction(data:any){
    return this.http.post<any>("http://127.0.0.1:8081/customerservice/v1/transactions", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postorder(data:any){
    return this.http.post<any>("http://127.0.0.1:8081/customerservice/v1/orders",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postcar(data:any){
    return this.http.post<any>("http://127.0.0.1:8083/marketingservice/v1/cars/models",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postprice(data:any){
    return this.http.post<any>("http://127.0.0.1:8083/marketingservice/v1/prices",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  viewcars(data:any){
    return this.http.get<any>("",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  viewtransaction_id(){
    return this.http.get<any>("http://127.0.0.1:8081/customerservice/v1/transactions")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  viewoffers(){
    return this.http.get<any>("http://127.0.0.1:8083/marketingservice/v1/offers")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postbookedcars(data:any){
    return this.http.post<any>("http://127.0.0.1:8080/carservice/v1/cars",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  listUsers(){
    return this.http.get<any>("http://127.0.0.1:8082/userservice/v1/users")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  viewOrders(){
    return this.http.get<any>("http://127.0.0.1:8081/customerservice/v1/orders")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  viewVehicleid(){
    return this.http.get<any>("http://127.0.0.1:8080/carservice/v1/cars")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  logoutUser(data:any){
    return this.http.post<any>("http://127.0.0.1:8082/userservice/v1/users/logout", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  viewCarModels(model_type:any){
    return this.http.get<any>("http://127.0.0.1:8083/marketingservice/v1/cars/models/"+ model_type)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  viewCarSUVs(){
    return this.http.get<any>("http://127.0.0.1:8083/marketingservice/v1/cars/models/SUVs")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  viewCarModelName(model_name:any){
    return this.http.get<any>("http://127.0.0.1:8080/carservice/v1/cars/model_name/" + model_name)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
