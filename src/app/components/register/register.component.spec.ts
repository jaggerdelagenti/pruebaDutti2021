import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { RegisterComponent } from "./register.component";

describe('RegisterComponent', () => {
  let component:RegisterComponent;
  let fixture:ComponentFixture<RegisterComponent>;
  let el: HTMLElement;
  const formBuilder:FormBuilder = new FormBuilder();

  beforeEach(async()=>{
    TestBed.configureTestingModule({
      declarations:[RegisterComponent],
      imports:[ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers:[RouterTestingModule ]
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture=TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set submitted to true', async(() => {
    component.registerUser();
    expect(component.registerUser).toBeTruthy();
  }));

 it('Should call the Register User method', () =>{ fakeAsync(() =>{
   fixture.detectChanges();
   spyOn(component,'registerUser');
   el=fixture.debugElement.query(By.css('Register')).nativeElement;
   el.click();
   expect(component.registerUser).toHaveBeenCalledTimes(0);
 })

 });

  it('Form should be invalid', async(()=> {
    component.registerForm.controls['first_name'].setValue('');
    component.registerForm.controls['last_name'].setValue('');
    component.registerForm.controls['username'].setValue('');
    component.registerForm.controls['email'].setValue('');
    component.registerForm.controls['password'].setValue('');
    expect(component.registerForm.valid).toBeFalsy();
  }));

  it('Form should be valid', async(()=> {
    component.registerForm.controls['first_name'].setValue('Maxi');
    component.registerForm.controls['last_name'].setValue('Mendez');
    component.registerForm.controls['username'].setValue('maxi');
    component.registerForm.controls['email'].setValue('maximendez@suweb.com.uy');
    component.registerForm.controls['password'].setValue('Pruebas');
    component.registerForm.controls['passwordConfirm'].setValue('Pruebas');
    expect(component.registerForm.valid).toBeTruthy();
  }));

  it('Form password validation, the passwords must to be equals', async(()=>{
    let pass=component.registerForm.controls['password'].setValue('Prueba')
    let passConf=component.registerForm.controls['passwordConfirm'].setValue('Prueba')
    if(pass===passConf){
      expect(component.registerForm).toBeTruthy();
    }else{
      expect(component.registerForm).toBeFalsy();
    }
  }));

});