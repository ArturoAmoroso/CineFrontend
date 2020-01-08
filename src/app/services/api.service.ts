import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Actor } from '../models/Actor'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  actorsUrl:string = 'https://localhost:44305/api/actors';

  // getActors():Observable<Actor[]>{
  //   // return this.http.get<Actor[]>(this.actorsUrl);
  // }

  getActors():Actor[]{
    return [
      {
        id: 1,
        name: "Jared",
        lastname: "Leto",
        age: 37
      },
      {
        id: 2,
        name: "Nicolas",
        lastname: "Kage",
        age: 45
      }
    ]
  }

}
