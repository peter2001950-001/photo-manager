import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/services/user.service';
import { IUser } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersResolver implements Resolve<IUser> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
     
    var length =  route.queryParams['length'];
    if(length){
        return this.userService.loadUsers(length);
    }else{
        return this.userService.loadUsers(1);
    }
   
  }
}