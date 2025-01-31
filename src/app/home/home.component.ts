import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedUser : IUser; 
  newSelectedUser(user: IUser){
    this.selectedUser = user;
  }

}
