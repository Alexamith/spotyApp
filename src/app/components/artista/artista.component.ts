import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  artista:any = {}
  topTracks:any = {}
  constructor(private route: ActivatedRoute, private service: SpotifyService) {
    this.route.params.subscribe( params =>{
      console.log(params['id']);
      this.getArtistId(params['id']);
      this.getArtistIdTracks(params['id']);
    });
   }

  getArtistId( id:string ){
    this.service.obetenerArtistaId(id).subscribe(artista => {
      this.artista = artista;
      console.log(this.artista);

    });
  }

  getArtistIdTracks( id:string ){

    this.service.obetenerArtistaIdTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
      console.log(this.topTracks);

    });
  }

}
