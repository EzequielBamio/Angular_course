import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyDq-j9B3kF4w3KswIal3cKOlH-3brGS8Rg';
  userToken: string;
  // new user
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  constructor( private http: HttpClient ) 
  {
    this.loadToken();
  }

  logout() 
  {
    localStorage.removeItem('token');
  }

  login( user: UserModel ) 
  {
    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    };

    return this.http.post(`${this.url}signInWithPassword?key=${this.apiKey}`, authData).pipe( map( resp => {
      this.saveToken( resp['idToken'] );

      return resp;
    }));

  }

  newUser( user: UserModel ) 
  {
    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    };

    return this.http.post(`${this.url}signUp?key=${this.apiKey}`, authData).pipe( map( resp => {
      this.saveToken( resp['idToken'] );

      return resp;
    }));
  }

  private saveToken( idToken: string )
  {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let today = new Date();
    today.setSeconds( 3600 );

    localStorage.setItem('Expires', today.getTime().toString() );

  }

  loadToken()
  {
    if(localStorage.getItem('token'))
    {
      this.userToken = localStorage.getItem('token')
    }else{
      this.userToken = '';
    }
  }

  isAuthenticate(): boolean
  {
    if( this.userToken.length < 2 )
    {
      return false;
    }

    const expire = Number(localStorage.getItem('Expires'));
    const expireDate = new Date();
    expireDate.setTime(expire);
    if( expireDate > new Date() )
    {
      return true;
    }

    return false;
  }

}
