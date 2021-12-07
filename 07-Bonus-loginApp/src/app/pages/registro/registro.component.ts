import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {

  remind: boolean = false;
  user: UserModel;

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit()
  {
    this.user = new UserModel();
  }

  onSubmit( form: NgForm )
  {
    if(form.invalid)
    {
      return;
    }
    
    Swal.fire({
      allowOutsideClick: false,
      text: 'Please wait...'
    });
    Swal.showLoading();

    this.auth.newUser( this.user ).subscribe( resp => {

      console.log(resp);
      Swal.close();
      if( this.remind )
      {
        localStorage.setItem('email', this.user.email);
      }
      this.router.navigateByUrl('/home');

    }, (err) =>{
      Swal.fire({
        allowOutsideClick: false,
        title: 'Failed to authenticate',
        text: err.error.error.message
      });
    });

  }


}
