import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FilmComponent } from './film/film.component';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from '../components/components.module';
import { FilmsPosterGridComponent } from '../components/films-poster-grid/films-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
    HomeComponent,
    FilmComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule
  ]
})
export class PagesModule { }
