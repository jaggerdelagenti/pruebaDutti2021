import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { environment } from "src/environments/environment.prod";
import { IUser } from "../interfaces/user";
import { UserService } from "./users.service"

describe('UserService', ()=>{
  let service: UserService;
  let httpMock:HttpTestingController;

  let fakeuser:IUser={
    _id:0,
    email:"admin@admin.com",
    password:"hola1235",
    username:"prueba",
    first_name:"Raquel",
    last_name:"Fabre",
    passwordConfirm:"hola1235",
    returnSecureToken:true,
  } 

  let fakeid='ddsa2313sdas';
  let fakevalue={
    token:"fkhjsdfjksdjkfjkfdsjk"
  }

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UserService],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    });
  })
  
  beforeEach(()=>{
    service = TestBed.inject(UserService);
    httpMock= TestBed.inject(HttpTestingController);
  });

  afterAll(()=>{
    httpMock.verify()
  });

  it('should create', ()=>{
    expect(service).toBeTruthy();
  })



  it('login authentification --> get user then pass and suscribe method to login',()=>{
    service.login(fakeuser).subscribe((res: IUser)=>{
      expect(res).toEqual(fakeuser)
    });

    const req = httpMock.expectOne(environment.apiLogin);
    expect(req.request.method).toBe('POST')
    req.flush(fakeuser)
    });

    it('register user for authenticate --> create user in db',()=>{
      service.register(fakeuser).subscribe((res: IUser)=>{
        expect(res).toEqual(fakeuser)
      });
  
      const req = httpMock.expectOne(environment.apiSignUpUrl);
      expect(req.request.method).toBe('POST')
      req.flush(fakeuser)
      });


    
    
    

      

})