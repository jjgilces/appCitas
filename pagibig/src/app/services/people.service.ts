import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaz/user';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }
  obtenerDatos() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  getUser(idx:number){
    let url = "http://localhost:3000/users/" + idx;
    return this.http.get<User>(url);
  }

}
