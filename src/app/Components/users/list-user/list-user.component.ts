import { ApiService } from 'src/app/Shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  listUsers: any;
  constructor(private ApiService:ApiService) { }

  ngOnInit(): void {
    this.ApiService.listUsers().subscribe(data => {
      this.listUsers = data;
    });
  }
  
}
