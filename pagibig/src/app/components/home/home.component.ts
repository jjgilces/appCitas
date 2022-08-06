import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title = 'Tic Tac Toe';
  public isAuthenticated = false;
  constructor() { }

  public logout(): void {
    // todo
  }
  ngOnInit(): void {
  }

}
