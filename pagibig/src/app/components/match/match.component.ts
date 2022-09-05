import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { User } from 'src/app/interfaz/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  arregloPerson:User[]=[];
  selectedValue: number=1;
  constructor(private fuente: PeopleService,
    private router:Router) { 
    fuente.obtenerDatos().subscribe((datos) => {
    this.arregloPerson=datos;
    });



  }
  ngOnInit(): void {

  }
  eliminarPersona(idx:number){
    console.log(idx);
    this.arregloPerson=this.arregloPerson.filter(item =>{
      console.log(item.Personid);
      return item.Personid != idx;
    });
  }

}
