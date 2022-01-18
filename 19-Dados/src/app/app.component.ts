import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numberRandom1: number = 1;
  numberRandom2: number = 4;
  url = '../assets/img/dice';
  dadoLeft = `${ this.url }${ this.numberRandom1 }.png`;
  dadoRight = `${ this.url }${ this.numberRandom2 }.png`;


  throwDados(){
    this.numberRandom1 = this.numberRandom(1, 6);
    this.numberRandom2 = this.numberRandom(1, 6);
    
    this.dadoLeft = `${ this.url }${ this.numberRandom1 }.png`;
    this.dadoRight = `${ this.url }${ this.numberRandom2 }.png`;

  }

  numberRandom(min: number, max: number): number
  {
    return Math.round(Math.random() * (max - min) + min);
  }

}
