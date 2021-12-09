import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor( private http: HttpClient ) { }

  getCountry()
  {
    return this.http.get<any[]>('https://restcountries.com/v2/lang/es').pipe(
      map( (resp: any[]) => resp.map( country => ({name: country.name, code: country.alpha3Code}) ) )
    );
  }
}
