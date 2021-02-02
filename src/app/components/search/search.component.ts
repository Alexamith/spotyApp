import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas : any[] = [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.spotify.obetenerArtista(termino).subscribe((data:any) => {
      console.log(data.artists.items.length);
      this.artistas = data.artists.items;
    });
  }

}