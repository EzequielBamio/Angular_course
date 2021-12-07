import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

//Import Routes
import { ROUTES } from './app-routes';
//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    CardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
