import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/users.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

	constructor( private _userService: UserService,
				 private router: Router){}
  
	canActivate(): Promise<boolean> {
		
		return new Promise(resolve =>{

			this._userService.authActivate().then(resp =>{

				if(!resp){

					this.router.navigateByUrl("/login");

					resolve(false)
				
				}else{
					resolve(true);
          
				}

			})

		})
	
	}
  
}
