import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { CountryService } from '../../services/country.service';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user = {
    // name: '',
    // lastName: '',
    // email: '',
    // country: ''
    name: 'Ezequiel',
    lastName: 'Bamio',
    email: 'ezequielbamio@gmail.com',
    country: 'ARG',
    sex: 'M'
  }

  countries: any[] = [];

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
    this.countryService.getCountry().subscribe( countries => {
      this.countries = countries;
      this.countries.unshift({
        nombre: '[Select country]',
        code: ''
      })
    })
  }

  save(form: NgForm)
  {
    if(form.invalid)
    {
      Object.values( form.controls ).forEach( control => {
        control.markAsTouched();
      });
      
      return ;
    }

    this.user = form.value; 
    console.log(this.user);
  }
}
