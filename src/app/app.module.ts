import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Se debe importar esto...
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Se Declara de esta forma la importacion
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
