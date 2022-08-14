import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  name : string ="";
  email : string ="";
  selectedGenre:String="";
  show: boolean= false;
  url:string='/assets/img/perfil.png';
  signosZodiacales:String[]=["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio","Piscis"]
  interest:String[]=["Mascotas","Deportes","Fotografía","Arte","Comedia","Lectura","Anime","Fumadores","Medio Ambiente"]
  generos:String[]=["Masculino","Femenino","Otro"]
  gustos:String[]=["Hombre","Mujeres"]
  rosa:String="warn"
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }

  confirm(){
    console.log(this.selectedGenre);
    console.log("user name is " + this.name);
    this.router.navigate(['home']);
  }

  onSelectFile(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
        console.log("hola")
      }
    }
  }

}
