import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotyService {

  constructor(private http:HttpClient) {
  
    console.log("servicio de spotify listo");

   }

   getNewReleases(){
    
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAZxELZX5lA_xB_VoUzt9yK0U4LVQ3pOws0JKHXjjZsrW9-D5hPuprBCp7DLIPDXkPerzbvmKFEOxZujK4'
    })
      
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
  //   .subscribe(data => {
  //     console.log(data);
  //   })

   }


   getArtista(termino:string){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQA2vd9zDMlaVU8LvxGjPnT2CUdLqStTeiRjyMiVPVgwm4l7MssfWX2LpY2p2GDyEcKIzmhwMq1prlVoatZPr7PmR48OmtXTWEvjByTx-wBSgHXiu6j4Vr_X3jSc38F5iG4kLFw1U9MD6iuLp5k6ViMjFmrgnHVovPM'
    })
      
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{headers})


   }
}
