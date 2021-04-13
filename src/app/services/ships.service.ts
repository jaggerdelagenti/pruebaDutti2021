import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { concatMap, expand, map, reduce, tap } from 'rxjs/operators';
import { empty, Observable } from 'rxjs';


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
  
  loading: boolean = true;
  obs$: any;

  constructor( private http: HttpClient ) { 
    this.obs$ = this.getShips();
  }
  
  /* getShips(): Observable<any>{
    return this.http.get(this.url).pipe( 
      map( data => { return data })
    );
  } */

  getShips(): Observable<any>{
    return this.http.get(this.url).pipe( expand((res: any) => {
      return res.next ? this.getResponse(res.next) : empty();
    }),
    concatMap((res: any) => res.results),
    reduce((data, val) => {
      data.push(val);
      return data;
    }, []),
    tap(_ => {                       
      this.loading = false;
    })
  )
  }

  getResponse(url) {
    return this.http.get(url);
  }

  
  //ESTA ESTA BIEN PERO NO TRAE TODOS LOS SHIPS
  // getShips(): Observable<any>{
  //        return this.http.get(this.url).pipe( 
  //          map( data => { return data })
  //          );
  // }


}