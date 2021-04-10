import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/users.service';


// JSON
import usersList from 'src/assets/json/users.json';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading: boolean = false;
  user:IUser;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _userService:UserService
  ) { 
    this.user = {
      _id:0,
      first_name:'',
      last_name:'',
      username:'',
      email:'',
      password:'',
    }
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: [ '', [Validators.required, Validators.minLength(3)]],
      last_name: [ '', [Validators.required, Validators.minLength(3)]],
      username: [ '', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.minLength(6)]],
      password:['',[Validators.required, Validators.minLength(6)]],
      passwordConfirm:['',Validators.required, Validators.minLength(6)]
    }, { validator: this.checkPasswords }
    )
  }
  

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
  
    return password === confirmPassword ? null : { notSame: true }     
  }

  registerUser() {
    // if (this.registerForm.invalid) { return }
    this.user = Object.assign(this.user, this.registerForm.value)
    // TODO : Falta integrar el servicio para registrar al usuario
    console.log(this.user)
    this._userService.register(this.user).then(res=>{
      console.log(res)
    })

    // var userLogin = this.registerForm.value;
    // usersList.push(userLogin)
    // console.log('User Register -->', usersList)
    // this.router.navigate(['/principal/ships'])

  }

}
