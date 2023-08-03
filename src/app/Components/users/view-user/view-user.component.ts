import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  user_id: string='';
  viewUsers: any;
  constructor(private UserService : UserService,
    private ActivatedRoute: ActivatedRoute,
    private _snackbar: MatSnackBar){ }

  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe(data=>{
      this.user_id = data['user_id']
    });

    this.UserService.viewUsers(this.user_id).subscribe(data =>{
      this.viewUsers = data;
    })



  }
}
