import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/users.service';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[UserService]
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
    this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })
    
  }
  loginUser() {
    // if (this.loginForm.invalid) { return }
    
    // TODO : Falta integrar el servicio para autentificar al usuario
    this.user=this.loginForm.value;
    console.log(this.user)
    this._userService.login(this.user.username,this.user.password).then(res=>
      console.log(res)
    );
    // JSON simulando usuarios
    var userLogin = this.loginForm.value.username;
    console.log(this.loginForm.value.username);
    this.users=JSON.parse( localStorage.getItem("usersList") );
    console.log(this.users);
    var filterJson = this.users.filter(function (user) { 
      console.log(user);
      return user.first_name === userLogin  });
    if (filterJson.length > 0) {
      this.router.navigate(['/principal/ships'])
    } else {
      this.unregistered = true;
    }
    console.log(filterJson)
  }
}

