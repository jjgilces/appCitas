import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  username : string ="";
  password : string ="";
  show: boolean= false;
  submit(){
  console.log("user name is " + this.username)
  this.clear();
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  clear(){
    this.username ="";
    this.password = "";
    this.show = true;
    }

}
