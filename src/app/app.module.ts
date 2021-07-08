import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Se debe importar esto...
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para material design...
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatSliderModule, // este igual
    BrowserAnimationsModule // Se Declara de esta forma la importacion
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
