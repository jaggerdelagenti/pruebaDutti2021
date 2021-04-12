import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShipService {

  private url = 'https://swapi.py4e.com/api/starships/';
  
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  

  constructor( private http: HttpClient ) { }


  getShips(): Observable<any>{
         return this.http.get(this.url).pipe(
            
           map( data => { return [data] })
           );
  }

  getShipById( id: string ) {
    return this.http.get(`${ this.url }/ships/${ id }`)
          .pipe(
            map( resp => resp['data'])
          );
  }

}

// export class ShipsService {

//   url: string = 'https://swapi.py4e.com/api/starships/'
//   headerDict = {
//     'Authorization': 'none',
//     'Access-Control-Allow-Origin': '*'
//   }
//   requestOptions = {                                                                                                                                                                                 
//     headers: new HttpHeaders(this.headerDict), 
//   };
  
//   constructor( private http: HttpClient ) {}

//   getShips(): Observable<any>{
//     return this.http.get(this.url).pipe( 
//       map( data => { return data })
//       );
//   }
  
// }
