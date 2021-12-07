import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artist: any = {};
  tracks: any[] = [];
  loading: boolean;

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService ) 
  {
    this.loading = false;

    this.router.params.subscribe( params => {

      this.getArtist( params['id'] );
      this.getTopTracks( params['id'] );
    });
  }

  getArtist( id: string )
  {
    this.loading = true;
    this.spotify.getArtist( id ).subscribe( artist => {
      this.artist = artist;
      this.loading = false;
    })
  }

  getTopTracks( id: string )
  {
    this.spotify.getTopTracks( id ).subscribe( topTracks => {
      console.log(topTracks);
      this.tracks = topTracks;

    })
  }

}
