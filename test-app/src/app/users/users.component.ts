import { UserService } from './user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers :   [UserService]
})
export class UsersComponent {

  constructor(private userService : UserService){
    this.username = this.userService.user;
  }
  username : {name : string};
}
