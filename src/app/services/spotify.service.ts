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
      'Authorization' : 'Bearer BQBaGf8bskAeqlmbm68BOYdgVl_7rouJUmonJIc6Pq7RU_mNivp83IQn-ru058judFadOZVMqBmCoCdr7Ro'
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
}
