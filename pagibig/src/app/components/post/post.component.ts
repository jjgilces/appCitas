import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/interfaz/post';
PostService
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:number=1;
  arregloPost:Post[]=[];
  constructor(private fuente: PostService) { 
    fuente.obtenerDatos().subscribe((datos) => {
     if(datos!=null) this.arregloPost=datos;
    })


  }

  ngOnInit(): void {
  }

}
