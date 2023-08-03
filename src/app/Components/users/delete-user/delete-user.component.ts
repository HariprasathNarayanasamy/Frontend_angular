import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  user_id: string = '';
  constructor(private ActivatedRoute: ActivatedRoute,
    private UserService: UserService,
    private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(data => {
      this.user_id = data['user_id'];
    });
    if(this.user_id){
      this.UserService.deleteUser(this.user_id).subscribe(data => {
        this._snackbar.open("User Deleted successfully");
      }, err => {
        this._snackbar.open("Unable to Delete the user ")
      })

    }
  }

}
