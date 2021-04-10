import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../services/users.service'

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanLoad {

  constructor( private UserService: UserService ) {}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean  {

    return this.UserService.checkToken();
  }

  // canActivate(): Observable<boolean> | Promise<boolean> | boolean {
  //    return false;
  //  }

}