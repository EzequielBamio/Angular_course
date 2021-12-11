import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor( private chatService: ChatService ) { }

  ngOnInit(): void {
  }

  access( redAccess: string){
    this.chatService.login( redAccess );
  }

}
