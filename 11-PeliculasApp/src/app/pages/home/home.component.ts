import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Film } from '../../interfaces/navApp-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {

  public films: Film[] = [];
  public filmsSlideshow: Film[] = [];


   @HostListener('window:scroll', ['$event'])
   onScroll(){
     const pos = ( document.documentElement.scrollTop || document.body.scrollTop ) + 1300;
     const max = ( document.documentElement.scrollHeight || document.body.scrollHeight )

     if( pos > max){
       this.filmsService.getBillboard().subscribe( films => {

        this.films.push(...films);
       });
     }

   }

  constructor( private filmsService: FilmsService ) { }

  ngOnInit(): void {
    this.filmsService.getBillboard().subscribe( films => {

      this.films = films;
      this.filmsSlideshow = films;
    });
  }

  ngOnDestroy()
  {
    this.filmsService.resetBillboardPage();
  }

}
  