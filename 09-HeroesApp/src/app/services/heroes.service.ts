import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://loginapp-1520f-default-rtdb.firebaseio.com'

  constructor( private http: HttpClient ) { }

  createHeroe( heroe: HeroeModel )
  {
    return this.http.post( `${ this.url }/heroes.json`, heroe).pipe( map( (resp : any) => {
      heroe.id = resp.name;
      return heroe;
    })
    );
  }

  updateHeroe( heroe: HeroeModel )
  {
    const heroeAux = {
      ...heroe
    };
    delete heroeAux.id;

    return this.http.put(`${ this.url }/heroes/${heroe.id}.json`, heroeAux)
  }

  deleteHeroe( id: string )
  {
    return this.http.delete(`${ this.url }/heroes/${ id }.json`);
  }

  getHeroe( id: string )
  {
    return this.http.get(`${ this.url }/heroes/${ id }.json`);
  }

  getHeroes()
  {
    return this.http.get(`${ this.url }/heroes.json`).pipe( map ( this.createArrayHeroes ), delay(1500));
  }

  private createArrayHeroes( heroesObj: any )
  {
    const heroes: HeroeModel[] = [];

    if( heroesObj === null ) { return []; }

    Object.keys( heroesObj ).forEach( key => {

      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;

      heroes.push( heroe );

    })

    return heroes;
  }

}
