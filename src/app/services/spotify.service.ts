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
      'Authorization' : 'Bearer BQBAUPxdU7r_yJ74dvx-vZyAhoLoBCwCod95MnBwMLUgPeNjxaF6AuupIsLChc9EGKIC9paa1hPfTy_qe2I'
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
