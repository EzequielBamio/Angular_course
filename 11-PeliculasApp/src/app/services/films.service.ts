import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BillboardResponse, Film } from '../interfaces/navApp-response';
import { tap, map, catchError } from 'rxjs/operators';
import { FilmResponse } from '../interfaces/film-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private page = 1;
  public loading = false;

  constructor( private http: HttpClient ) { }

  get params()
  {
    return {
      api_key: '2f344d86ab11ec1f3e3e9505b442d763',
      language: 'en-US',
      page: this.page.toString()
    }
  }

  resetBillboardPage(){
    this.page = 1;
  }

  getBillboard(): Observable<Film[]> {
    
    if( this.loading ) 
    {
      return of( [] );
    }

    this.loading = true;
    return this.http.get<BillboardResponse>(`${ this.baseUrl }/movie/now_playing?`, {
      params: this.params
    }).pipe( 
      map( resp => resp.results ),
      tap( () => 
      { 
  
        this.page += 1;
        this.loading = false;
  
      })
    );
  }

  searchFilms( query: string): Observable<Film[]>{

    const params = {...this.params, page: '1' , query}

    return this.http.get<BillboardResponse>(`${ this.baseUrl }/search/movie?`, {
      params
    }).pipe(
      map( resp => resp.results )
    )

  }

  getFilmDetails( id: string)
  {
    return this.http.get<FilmResponse>(`${ this.baseUrl }/movie/${ id }`, {
      params: this.params
    }).pipe(
      catchError( error => of(null) )
    )
  }

  getFilmCredits( id: string) : Observable<Cast[]>
  {
    return this.http.get<CreditsResponse>(`${ this.baseUrl }/movie/${ id }/credits`, {
      params: this.params
    }).pipe(
      map( resp => resp.cast ),
      catchError( error => of([]) )
    );
  }
}
