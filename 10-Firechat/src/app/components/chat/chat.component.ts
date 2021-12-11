import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  message: string = '';
  element: any;

  constructor( public chatService: ChatService ) {
  
    this.chatService.loadMessage().subscribe( () => {
      
      setTimeout( () => {

        this.element.scrollTop = this.element.scrollHeight

      }, 20);
    
    });

  }

  ngOnInit() {
      this.element = document.getElementById('app-messages');
  }

  send_message(){
    {
      console.log(this.message);
      if( this.message.length === 0 ){ return; }
  
  
      this.chatService.addMessage( this.message )
                                              .then( () => this.message = "" )
                                              .catch( (error) => console.error('Error sending', error))
    }
  }
}
