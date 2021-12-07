import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;
  constructor( private spotify: SpotifyService ) 
  {
    this.loading = true;
    this.error = false;
    this.messageError = "";

    this.spotify.getNewReleases().subscribe( (data : any) => {
      console.log(data);
      this.newSongs = data;
      this.loading = false;
    }, ( errorService ) => {
      this.messageError = errorService.error.error.message;
      this.error = true;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
