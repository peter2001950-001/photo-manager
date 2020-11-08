import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/services/user.service';
import { IUser } from '../models/user.model';
import {map, switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) 
  { 
    this.userService.subject.subscribe(users => {
      this.users = users;
      if(activatedRoute.snapshot.queryParams["userId"]&&users){
        var user = users.find(x=>x.id == activatedRoute.snapshot.queryParams["userId"]);
        if(user){
          this.selectUser(user);
        }
      }
    })
    }
   users: IUser[];
   selectedUser: IUser;
    selectedUserChange: Subscription;
  ngOnInit(): void {
    this.selectedUserChange = this.userService.selectedUser.subscribe((user: IUser) =>{
      this.selectedUser = user;
    });
  }
  selectUser(user: IUser){
      this.userService.selectUser(user);
      this.router.navigate(["/home"], {queryParams: {userId : user.id, length : this.users.length}});
  }
  loadUsers(): void{
    this.userService.loadUsers(this.users.length+1); 
    this.router.navigate(["/home"], {queryParams: {length : this.users.length, userId : this.selectedUser?.id}});
  }

}
