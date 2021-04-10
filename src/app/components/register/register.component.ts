import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
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
  usersList;


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
    },
    this.usersList=[];
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: [ '', [Validators.required, Validators.minLength(3)]],
      last_name: [ '', [Validators.required, Validators.minLength(3)]],
      username: [ '', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.minLength(6)]],
      password:['',[Validators.required, Validators.minLength(6)]],
      passwordConfirm:['',[Validators.required, Validators.minLength(6),]]
    }, { validator: this.passwordConfirming }
    )
  }
  
  //aquí chequeo los passwords
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('passwordConfirm').value) {
        return {invalid: true};
    }
}

  registerUser() {
    if (this.registerForm.invalid) { return alert("invalid")}
    
    // TODO : Falta integrar el servicio para registrar al usuario
    var userLogin = this.registerForm.value;
    this.user = userLogin;
    //servicio para registrar al usuario
    this._userService.register(this.user).then(res=>{
      //ya hice toda la verificación del token desde el lado cliente lo único que me queda saber es si es null la res
      if(res)
      {
      usersList.push(userLogin)
      console.log('User Register -->', usersList)
      localStorage.setItem("usersList",JSON.stringify(usersList));
      this.router.navigate(['/principal/ships'])
      }else{
        error=>{
          console.log(<any>error)
        }
      }
    },
    error=>{
      console.log(<any>error)
    })

    

  }

}
