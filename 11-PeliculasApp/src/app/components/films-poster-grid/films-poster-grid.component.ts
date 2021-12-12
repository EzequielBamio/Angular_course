import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/interfaces/navApp-response';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-films-poster-grid',
  templateUrl: './films-poster-grid.component.html',
  styleUrls: ['./films-poster-grid.component.css']
})
export class FilmsPosterGridComponent implements OnInit {

  @Input() films: Film[] = [];
  @Input() pathImg: string = '';

  constructor( private filmsService: FilmsService,
               private router: Router ) { }

  ngOnInit(): void {
        
  }

  onFilmClick( film: Film )
  {
    this.router.navigate(['/film', film.id]);
  }

}
