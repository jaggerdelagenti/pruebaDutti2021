import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { IUser } from '../interfaces/user';

const URL = environment.apiSignUpUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

 token: string = null;
 private user: IUser;
 storage: any;

  constructor( private _httpClient: HttpClient,
             ) { }
  
  login( username: string, password: string ) {

    const data = { username, password };

    return new Promise( resolve => {

      this._httpClient.post(`${ URL }user/login`, data )
        .subscribe( async resp => {
          console.log(resp);

          if ( resp['ok'] ) {
            await this.saveToken( resp['token'] );
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }

        });

    });

  }

  register( user: IUser ) {

    return new Promise( resolve => {
      this._httpClient.post(`${ URL }user/create`, user )
          .subscribe( async resp => {
            console.log(resp);

            if ( resp['ok'] ) {
              await this.saveToken( resp['token'] );
              resolve(true);
            } else {
              this.token = null;
              resolve(false);
            }

          });
    });
  }
  async saveToken( token: string ) {
    this.token = token;
    await localStorage.setItem('token', token);
    //await this.storage.set('token', token);
    await this.checkToken();
  }

  async checkToken(): Promise<boolean> {
    
    await this.loadToken();
    
    if ( !this.token ) {
      //this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean>( resolve => {
      const headers = new HttpHeaders({
        'x-token': this.token
      });
      
      this._httpClient.get(`${ URL }user/user/`, { headers })
        .subscribe( resp => {
          if ( resp['ok'] ) {
            this.user = resp['user'];
            resolve(true);
          } else {
            //this.navCtrl.navigateRoot('/login');
            resolve(false);
          }
        });


    });

  }

  async loadToken() {

   //this.token = await this.storage.get('token') || null;
    this.token= await localStorage.getItem('token')||null;
  }

  getUser() {

    if ( !this.user._id ) {
      this.checkToken();
    }

    return { ...this.user };

  }

 

}

