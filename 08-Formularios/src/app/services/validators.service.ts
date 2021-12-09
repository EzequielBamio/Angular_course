import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate
{
  [s:string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor(  ) { }

  noHerrera( control: FormControl ): ErrorValidate
  {
    if( control.value?.toLowerCase() === 'herrera' )
    {
      return {
        noHerrera: true
      }
    }

    return null;
  }

  existUser( control: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate>
  {

    if( !control.value )
    {
      return Promise.resolve(null);
    }

    return new Promise ( (resolve, reject) => {
      setTimeout( () => {

        if(control.value === 'stider')
        {
          resolve({exist: true});
        }else{
          resolve(null);
        }

      }, 3500);
    });
  }

  samePassword(pass1: string, pass2: string)
  {
    return ( form: FormGroup ) =>  {
      const pass1Control = form.controls[pass1];
      const pass2Control = form.controls[pass2];

      if( pass1Control.value === pass2Control.value)
      {
        pass2Control.setErrors(null);
      }else
      {
        pass2Control.setErrors( {sameIsNot: true} );
      }


    }
  }

}
