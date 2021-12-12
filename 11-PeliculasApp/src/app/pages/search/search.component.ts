import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../services/films.service';
import { Film } from '../../interfaces/navApp-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  films: Film[] = [];
  valueSearch: string = '';

  constructor( private activatedRoute: ActivatedRoute,
               private filmsService: FilmsService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      
      this.valueSearch = params['text'];
      
      this.filmsService.searchFilms( params['text'] ).subscribe( filmsS => {
        this.films = filmsS;
      })
    });
  }

}
