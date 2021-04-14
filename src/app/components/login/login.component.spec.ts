import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { LoginComponent } from "./login.component";

describe('LoginComponent', () => {
  let component:LoginComponent;
  let fixture:ComponentFixture<LoginComponent>;
  let el: HTMLElement;
  const formBuilder:FormBuilder = new FormBuilder();

  beforeEach(async()=>{
    TestBed.configureTestingModule({
      declarations:[LoginComponent],
      imports:[ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers:[RouterTestingModule ]
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture=TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set submitted to true', async(() => {
    component.loginUser();
    expect(component.loginUser).toBeTruthy();
  }));

 it('Should call the Login User method', () =>{ fakeAsync(() =>{
   fixture.detectChanges();
   spyOn(component,'loginUser');
   el=fixture.debugElement.query(By.css('Login')).nativeElement;
   el.click();
   expect(component.loginUser).toHaveBeenCalledTimes(0);
 })

 });

  it('Form should be invalid', async(()=> {
    component.loginForm.controls['username'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  }));

  it('Form should be valid', async(()=> {
    component.loginForm.controls['username'].setValue('admin');
    component.loginForm.controls['password'].setValue('admin123');
    expect(component.loginForm.valid).toBeTruthy();
  }));

});