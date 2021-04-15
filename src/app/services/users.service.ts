import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { IUser } from '../interfaces/user';

const URLAUTH = environment.apiSignUpUrl;
const URLLOGIN = environment.apiLogin;
const URLAPI = environment.api;

@Injectable({
  providedIn: 'root'
})
export class UserService {

 token: string = null;
 private user: IUser;
 storage: any;

  constructor( private http: HttpClient,
             ) { }

  login(user: IUser){
    return this.http.post(`${URLLOGIN}`, user);
  }
  
  register(user:IUser){
    return this.http.post(`${URLAUTH}`,user)
  }
  
  registerDatabase(user:IUser){
    delete user.password;
    delete user.returnSecureToken;
    delete user.passwordConfirm;
    return this.http.post(`${URLAPI}/users.json`,user)
  }

  //actualizo data del user
	patchData(id:string, value:object){
    return this.http.patch(`${URLAPI}users/${id}.json`,value);  
  }
 

}

