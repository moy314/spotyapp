import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotyService } from '../../services/spoty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {

  nuevasCanciones:any[] = [];
  titulo:string = "";
  
 // paises:any[] = [];

  constructor( private spotify:SpotyService) {  //private  http:HttpClient
    
    // console.log('contructor del home');
    // this.http.get('https://restcountries.com/v3.1/lang/spa')
    // .subscribe( (data:any) =>{
    //   this.paises = data;
    //   console.log(data);
    // })
  
    this.spotify.getNewReleases()
    .subscribe( (data:any) => {
          console.log(data.albums.items);
          this.nuevasCanciones = data.albums.items;
          this.titulo = data.albums.items.name;
         })

   }

  
}
