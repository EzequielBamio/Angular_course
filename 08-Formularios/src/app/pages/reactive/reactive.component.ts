import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private validator: ValidatorsService ) 
  {

    this.form = this.formBuilder.group({
      // name    : ['Ezequiel'],
      // lastName: ['Bamio'],
      // email   : ['bamioezequiel@gmail.com'],
      name    : ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, this.validator.noHerrera]],
      email   : ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      user: ['', , this.validator.existUser],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      address : this.formBuilder.group({
        district: ['', Validators.required],
        city: ['', Validators.required],
      }),
      hobbies: this.formBuilder.array([])
    }, {
      validators: this.validator.samePassword('password1', 'password2')
    });

    this.loadDataToForm();
    this.createListeners();

  }

  ngOnInit(): void {
  }
  get hobbies()
  {
    return this.form.get('hobbies') as FormArray;
  }
  get nameNotValid()
  {
    return this.form.get('name')?.invalid && this.form.get('name')?.touched;
  }
  get lastNameNotValid()
  {
    return this.form.get('lastName')?.invalid && this.form.get('lastName')?.touched;
  }
  get emailNotValid()
  {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }
  get userNotValid()
  {
    return this.form.get('user')?.invalid && this.form.get('user')?.touched;
  }
  get districtNotValid()
  {
    return this.form.get('address.district')?.invalid && this.form.get('address.district')?.touched;
  }
  get cityNotValid()
  {
    return this.form.get('address.city')?.invalid && this.form.get('address.city')?.touched;
  }
  get password1NotValid()
  {
    return this.form.get('password1')?.invalid && this.form.get('password1')?.touched;
  }
  get password2NotValid()
  {
    const pass1 = this.form.get('password1').value;
    const pass2 = this.form.get('password2').value;

    return ( pass1 === pass2) ? false : true;
  }

  createListeners()
  {
    // this.form.valueChanges.subscribe( value => {
      
    //   console.log(value);
    // });

    // this.form.statusChanges.subscribe( status => console.log(status));

    this.form.get('name').valueChanges.subscribe( console.log );
  }

  loadDataToForm()
  {
    this.form.reset(  {
      name: "Fernando",
      lastName: "Perez",
      email: "juan@gmail.com",
      password1: "123",
      password2: "123",
      address: 
      {
        district: "Ontario",
        city: "Ottawa"
      }
    });

    []
  }

  addHobbies()
  {
    this.hobbies.push( this.formBuilder.control('') )
  }
  
  deleteHobbies( i: number )
  {
    this.hobbies.removeAt( i );
  }

  save()
  {
    if(this.form.invalid)
    {
      return Object.values( this.form.controls ).forEach( control => {

        if( control instanceof FormGroup)
        {
          Object.values( control.controls ).forEach( control => control.markAsTouched() )
        }else
        {
          control.markAsTouched();
        }

      });
      
    }

    this.form.reset();
    console.log(this.form);
  }

  

}
