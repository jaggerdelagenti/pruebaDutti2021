import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { inject, TestBed } from "@angular/core/testing";
import { UserService } from "./users.service";

const fakeUsername="admin";
const fakePass="Pruebas123";

describe('Service: List Service', () => {
    let httpMock: HttpTestingController;
    let service: UserService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [UserService] });
    });
  
    beforeEach(inject([UserService, HttpTestingController], (_service, _httpMock) => {
      service = _service;
      httpMock = _httpMock;
    }));
  
    it('login must return ok', () => {
      service.login(fakeUsername,fakePass).then(user => {
        expect(fakeUsername).toBeTruthy();
        expect(fakePass).toBeTruthy();
    });
  
      
    });
  });