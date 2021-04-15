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
 private getUserData:string = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAy5OtVoGIia7jeE64SZu8vzJWeVddyGKQ';

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

  authActivate(){	

    return new Promise(resolve=>{

    //valido que el id del token sea real

      if(localStorage.getItem("idToken")){

        let body = {

          idToken: localStorage.getItem("idToken") 
        }
    
      this.http.post(`${this.getUserData}`, body)
      .subscribe(resp=>{	
        
      //valido la fecha de expiracion

          if(localStorage.getItem("expiresIn")){

            let expiresIn = Number(localStorage.getItem("expiresIn"));

            let expiresDate = new Date();
            expiresDate.setTime(expiresIn);
           

            if(expiresDate > new Date()){

              resolve(true)
            
            }else{
              
              localStorage.removeItem('idToken');
                localStorage.removeItem('expiresIn');
              resolve(false)
            }

          }else{

            localStorage.removeItem('idToken');
            localStorage.removeItem('expiresIn');
            resolve(false)
          
          }


      },err =>{
        
        localStorage.removeItem('idToken');
        localStorage.removeItem('expiresIn');
        resolve(false)

      })

    }else{

      localStorage.removeItem('idToken');
          localStorage.removeItem('expiresIn');		
      resolve(false)	
    }

  })	

  }
 

}

