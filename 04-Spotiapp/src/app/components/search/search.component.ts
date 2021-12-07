import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService ) 
  { 
    this.loading = false;
  }

  search(term: string)
  {
    this.loading = true;

    if(term != ""){    

      this.spotify.getArtists( term ).subscribe( ( data: any ) => {
        this.artists = data;
        this.loading = false;
      })
    }else
    {
      this.loading = false;
      this.artists = [];
    }
  }

}
