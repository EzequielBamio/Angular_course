import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Routes
import { APP_ROUTING } from './app.routes';

//Service


//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesService } from './service/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchHeroeComponent } from './components/search-heroe/search-heroe.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchHeroeComponent,
    HeroeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
