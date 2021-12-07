import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  remind: boolean = false;
  user: UserModel;
  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit() {
    this.user = new UserModel();
    if( localStorage.getItem('email') )
    {
      this.user.email = localStorage.getItem('email');
      this.remind = true;
    }
  }

  login( form: NgForm )
  {
    if( form.invalid ) { return }

    Swal.fire({
      allowOutsideClick: false,
      text: 'Please wait...'
    });

    Swal.showLoading();

    this.auth.login( this.user ).subscribe( resp => {

      console.log(resp);
      Swal.close();
      if( this.remind )
      {
        localStorage.setItem('email', this.user.email);
      }


      this.router.navigateByUrl('/home');

    }, (err) => {
      Swal.fire({
        allowOutsideClick: false,
        title: 'Failed to authenticate',
        text: err.error.error.message
      });
    });

  }

}
