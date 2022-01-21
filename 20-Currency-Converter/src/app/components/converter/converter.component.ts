import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  currencies: string[] = ['USD', 'EUR', 'LIBRA'];
  amount: number = 0;
  convert: string = 'USD';
  convertTo: string = 'EUR';
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  convertCurrency(){

    switch(this.convert)
    {
      case 'USD':
        if(this.convertTo === 'USD'){
          this.total = this.amount;
        }else{
          if(this.convertTo === 'EUR'){
            this.total = this.amount * 0.84;
          }else{
            this.total = this.amount * 0.75;
          }
        }
      break;
      case 'EUR':
        if(this.convertTo === 'USD'){
          this.total = this.amount * 1.20;
        }else{
          if(this.convertTo === 'EUR'){
            this.total = this.amount;
          }else{
            this.total = this.amount * 0.90;
          }
        }
      break;
      case 'LIBRA':
        if(this.convertTo === 'USD'){
          this.total = this.amount * 1.33;
        }else{
          if(this.convertTo === 'EUR'){
            this.total = this.amount * 1.11;
          }else{
            this.total = this.amount;
          }
        }
      break;

    }

  }

  

}
