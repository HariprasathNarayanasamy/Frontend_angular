import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'http://127.0.0.1:8082/userservice/v1/users';
  constructor(private http:HttpClient) { }

  viewUsers(user_id:any){
    return this.http.get(this.baseUrl+"/"+ user_id);
  }



  deleteUser(user_id: any){
    return this.http.delete(this.baseUrl+"/"+ user_id);
  }

}
