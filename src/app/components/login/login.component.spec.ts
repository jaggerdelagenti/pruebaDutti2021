import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { LoginComponent } from "./login.component";

fdescribe('LoginComponent', () => {
  let component:LoginComponent;
  let fixture:ComponentFixture<LoginComponent>;
  
  const formBuilder:FormBuilder = new FormBuilder();

  beforeEach(async()=>{
    TestBed.configureTestingModule({
      declarations:[LoginComponent],
      imports:[ReactiveFormsModule],
      providers:[RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture=TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  

});