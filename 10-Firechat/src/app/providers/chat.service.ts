import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Message } from '../interface/message.interface';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection!: AngularFirestoreCollection<Message>;
  public chats: Message[] = [];
  public user: any = {};

  constructor( private afs: AngularFirestore,
               public auth: AngularFireAuth ) 
  {
    this.auth.authState.subscribe( user => { 

      console.log(user);

      if(!user){ return; }

        this.user.name = user.displayName;
        this.user.uid = user.uid;
     } );
  }

  login( redAccess: string ) {

    if(redAccess === 'google'){
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }else
    {
      this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }
  }
  logout() {
    this.user = {};
    this.auth.signOut();
  }
  
  loadMessage()
  {
    this.itemsCollection = this.afs.collection<Message>('chats', ref => ref.orderBy('date', 'desc').limit(5));
    
    return this.itemsCollection.valueChanges().pipe( map( ( messages: Message[] ) => {
      // this.chats = messages;
      this.chats = [];

      for( let message of messages)
      {
        this.chats.unshift(message);
      }

      return this.chats;
    })
    );
  }

  addMessage( text: string )
  {
    //Missing the User UID 
    let message: Message = {
      name: this.user.name,
      message: text,
      date: new Date().getTime(),
      uid: this.user.uid
    }

    return this.itemsCollection.add( message )

  }
}
