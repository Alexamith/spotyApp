import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query : string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQA335fGNXGTSIpINzt5NlR-u4N-0Zn613IsOgiN6q8kTbwtMSm9BV8NjFxpbBiduiB02vDU3nVz78_MB2w'
    });

    return this.http.get(url, {headers});
  }
  obtenerUltimosRegistros(){

    return this.getQuery('browse/new-releases').pipe(map(data => {
      return data['albums'].items;
    }));
  }

  obetenerArtista(termino: string ){
     return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => {
      return data['artists'].items;
    }));
  }

  obetenerArtistaId(termino: string ){
    return this.getQuery(`artists/${termino}`);
 }

 obetenerArtistaIdTracks(termino: string ){

    return this.getQuery(`artists/${termino}/top-tracks?country=us`).pipe(map(data => {
      return data['tracks'];
    }));
    

  }
}
