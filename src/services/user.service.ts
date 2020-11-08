import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { IUser } from 'src/app/models/user.model';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser = new Subject<IUser>();
  users: IUser[];
  subject: Subject<IUser[]>;
  constructor(private http: HttpClient) { 
    this.subject = new BehaviorSubject<IUser[]>(null);
  }

  loadUsers(number?: number): any{
    this.http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`).subscribe(users=>{
      if(number){
        this.users = users.slice(0, number);
        this.subject.next(users.slice(0, number));
      }else{
      this.users = users;
      this.subject.next(users);
      }
    })
    }
  selectUser(user: IUser): void{
      this.selectedUser.next(user);
  }
}
