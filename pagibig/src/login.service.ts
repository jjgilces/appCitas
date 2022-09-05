import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly urlAPI = "http://localhost:3000/api/";
  constructor(private http:HttpClient) { }

  enviarUser(user:string,contra:string):Observable<any>{
    return this.http.post<any>(`${this.urlAPI}registrar`,{
      usuario:user,
      password:contra
    });
  }

  getUser(user:string,contra:string):Observable<any>{
    return this.http.post<any>(`${this.urlAPI}login`,{
      usuario:user,
      password:contra
    })
  }

  getAllUsers():Observable<any>{
    return this.http.get<any>(`${this.urlAPI}`);
  }

  deleteUser(usuario:string):Observable<any>{
    return this.http.delete<any>(`${this.urlAPI}/borrar/${usuario}`)
  }

  updateUser(usuario:string):Observable<any>{
    return this.http.put<any>(`${this.urlAPI}update`,{
      usuario:usuario
    })
  }

}
