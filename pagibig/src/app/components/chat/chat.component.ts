import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import Pusher from 'pusher-js';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  products : any = [];
  username = 'username';
  message = '';
  messages:any[] = [];
  constructor(private hhtp:HttpClient) { }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('95abe39127eb5bfa08f8', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data:any)=> {
      this.messages.push(data);
    });
  }
  submit():void{
    this.hhtp.post('api/messages',{
      username: this.username,
      message: this.message
    }).subscribe( ()=>this.message ='' );
  }

}
