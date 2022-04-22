import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SpotyService } from './services/spoty.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    

  ],
  providers: [SpotyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
