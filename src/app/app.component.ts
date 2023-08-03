import { Component, OnInit } from '@angular/core';
import { ApiService } from './Shared/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mahindracars_2';

  constructor(){ }
  comp:any;
  ngOnInit(): void {
    
  }
}
