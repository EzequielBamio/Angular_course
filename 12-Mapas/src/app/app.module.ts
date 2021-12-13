import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MapEditComponent } from './components/map/map-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents:[
    MapEditComponent,
  ],
  declarations: [
    AppComponent,
    MapComponent,
    MapEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBAIrJL9AJPd2UqUc40Qz9jsL6PEZ_3CJY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
