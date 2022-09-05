import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { User } from 'src/app/interfaz/user';
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  arregloPerson:User[]=[];
  constructor(private fuente: PeopleService) { 
    fuente.obtenerDatos().subscribe((datos) => {
    this.arregloPerson=datos;
    console.log(datos)
    });



  }
  ngOnInit(): void {
  }

}
