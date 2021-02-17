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
      'Authorization' : 'Bearer BQCHOCwMI6RUjE2RzRvTh5b9A-_JkEG8LvBaks4aNlAZRVA_aUOr2HXvjByxLsf1SkT1Z1pw4EyV_MJIinU'
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
