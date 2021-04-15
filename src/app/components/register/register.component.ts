import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, FormControlName } from '@angular/forms';
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
      passwordConfirm:'',
      returnSecureToken:null
    },
    this.usersList=[];
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: [ '', [Validators.required, Validators.minLength(3)]],
      last_name: [ '', [Validators.required, Validators.minLength(3)]],
      username: [ '', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.minLength(6)]],
      returnSecureToken:[''],
      password:['',[Validators.required, Validators.minLength(6)]],
      passwordConfirm:['',[Validators.required, Validators.minLength(6),],
     
    ]
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
    this.registerForm.patchValue({
      returnSecureToken:true
    })
    this.user = this.registerForm.value;

    this._userService.register(this.user).subscribe(res=>{
        delete res["passwordConfirm"];
        if(res["email"]===this.user.email){
          this._userService.registerDatabase(this.user).subscribe(resp=>{
            console.log(resp)
            this.router.navigateByUrl('');
          })
        }
    })
  }

 

}
