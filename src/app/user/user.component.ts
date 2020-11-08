import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/services/user.service';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  userChanged: Subscription;
  selectedUser: IUser;
  ngOnInit(): void {
      this.userChanged = this.userService.selectedUser.subscribe((user: IUser)=>{
          this.selectedUser = user;
      })
  }

}
