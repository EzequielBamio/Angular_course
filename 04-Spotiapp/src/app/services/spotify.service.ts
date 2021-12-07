import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 

  }

  getNewReleases()
  {
    return this.getQuery(`browse/new-releases?limit=20`)
    .pipe( map( (data: any) => data["albums"].items ));
  }

  getArtists( term: string )
  {
    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
    .pipe( map( (data: any) => data["artists"].items ));
  }

  getArtist( id: string )
  {
    return this.getQuery(`artists/${ id }`)
  }

  getTopTracks( id: string )
  {
    return this.getQuery(`artists/${ id }/top-tracks?market=us`).pipe(map( (data: any) => data['tracks']));
  }

  getQuery(query: string)
  {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders(
       {
        'Authorization': 'Bearer BQD9WraKzOSec_fJ0PgiS5PC5zNMsQ34uQatPd9oKY43u-z0RSaIlSt-RHx02QO9h7geesuuGCOPdX5Xcxw'
      });

      return this.http.get(url, { headers })
  }
}
