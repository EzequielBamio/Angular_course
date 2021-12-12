import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from '../../services/films.service';
import { FilmResponse } from '../../interfaces/film-response';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-response';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
})
export class FilmComponent implements OnInit {

  film!: FilmResponse;
  cast: Cast[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private filmsService: FilmsService,
               private location: Location,
               private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    combineLatest([
      this.filmsService.getFilmDetails( id ),
      this.filmsService.getFilmCredits( id )

    ]).subscribe( ( [film, cast] ) => {
      
      if( !film )
      { 
        this.router.navigateByUrl('/home');
        return;
      }
      this.film = film;
      this.cast = cast.filter( actor => actor.profile_path !== null);

    });

    // this.filmsService.getFilmDetails( id ).subscribe( film => {

    //   if(film === null)
    //   { 
    //     this.router.navigateByUrl('/home');
    //     return;
    //   }

    //   this.film = film;      

    // });

    // this.filmsService.getFilmCredits( id ).subscribe( cast => {
      
    //   this.cast = cast.filter( actor => actor.profile_path !== null);
    // })

  }

  onBack()
  {
    this.location.back();
  }

}
