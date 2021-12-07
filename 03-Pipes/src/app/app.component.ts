import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  name        : string   = 'Canadá';
  name2       : string   = 'ezEquIEL bAMio';
  array       : number[] = [1,2,3,4,5,6,7,8,9,10];
  PI          : number   = Math.PI;
  percentage  : number   = 0.223;
  salary      : number   = 1220.3;
  dateP       : Date     = new Date();
  enable    : boolean  = true;
  idiom       : string   = 'fr';
  videoUrl    : string   = 'https://www.youtube.com/embed/lh8dNmneVyY';

  valuePromise = new Promise<string>( (resolve) => {

    setTimeout(() => {
      resolve('The data arrived');
    }, 4500);

  })

  heroe = 
  {
    name:   'Logan',
    key:    'Wolverine',
    age:     500,
    direction:
    {
      street: 'First',
      house: 20
    }
  }

}
