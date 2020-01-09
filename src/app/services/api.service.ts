import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Actor } from '../models/Actor'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  actorsUrl:string = 'https://localhost:44305/api/actors';

  getActors():Observable<Actor[]>{
    return this.http.get<Actor[]>(this.actorsUrl);
  }

  deleteActor(actor: Actor): Observable<boolean>{
    const actorUrl:string = `${this.actorsUrl}/${actor.id}`;
    return this.http.delete<boolean>(actorUrl);
  }

  addActor(actor: Actor): Observable<Actor>{
    return this.http.post<Actor>(this.actorsUrl, actor);
  }

  editActor(actor: Actor): Observable<Actor>{
    const actorUrl:string = `${this.actorsUrl}/${actor.id}`;
    return this.http.put<Actor>(actorUrl, actor);
  }

  // getActors():Actor[]{
  //   return [
  //     {
  //       id: 1,
  //       name: "Jared",
  //       lastname: "Leto",
  //       age: 37
  //     },
  //     {
  //       id: 2,
  //       name: "Nicolas",
  //       lastname: "Kage",
  //       age: 45
  //     }
  //   ]
  // }

}
