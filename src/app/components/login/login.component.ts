import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/users.service';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading: boolean = false;
  users: any = usersList;
  unregistered: boolean = false;
  invalid: boolean = false;
  public user:IUser;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _userService:UserService
  ) { 
      
  }

  ngOnInit(): void {
    localStorage.clear();
    this.loginForm = this.fb.group({
      email: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })    
  }
  loginUser() {
    if (this.loginForm.invalid) { return }
    // TODO : Falta integrar el servicio para autentificar al usuario
    // Servicio para autentificar al usuario
    
    this.user=this.loginForm.value;
    this.user.returnSecureToken=true;

    this._userService.login(this.user).subscribe(res =>{
                //alaceno id token en firebase
                let id = Object.keys(res).toString();
		      			let value = {
		      			idToken: res["idToken"]
                }
                console.log(value)
                this._userService.patchData(id, value).subscribe(res2=>{
                  if(res2["idToken"] != ""){
                    localStorage.setItem("idToken", res2["idToken"]);
                    localStorage.setItem("email", res2["email"]);

                    let today = new Date();
                    console.log(today)
                    today.setSeconds(30);
                    console.log(today)
                    
                    localStorage.setItem("expiresIn", today.getTime().toString());
                   
                    this.router.navigateByUrl('/principal/ships');
                    
                  }
                })

    })

  }
}

