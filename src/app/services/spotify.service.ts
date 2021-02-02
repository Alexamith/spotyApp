import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  obtenerUltimosRegistros(){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBaGf8bskAeqlmbm68BOYdgVl_7rouJUmonJIc6Pq7RU_mNivp83IQn-ru058judFadOZVMqBmCoCdr7Ro'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }

  obetenerArtista(termino: string ){
    console.log(`Termino que llega al servicio es: ${termino}`);
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBaGf8bskAeqlmbm68BOYdgVl_7rouJUmonJIc6Pq7RU_mNivp83IQn-ru058judFadOZVMqBmCoCdr7Ro'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`,{headers});
  }
}
