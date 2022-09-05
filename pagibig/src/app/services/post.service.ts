import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/interfaz/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }
  obtenerDatos() {
    return this.http.get<Post[]>('https://socialmedia-a26da-default-rtdb.firebaseio.com/base.json');
  }
}
