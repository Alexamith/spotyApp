import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas : any[] = [];
  loading : boolean;
  constructor(private spotify: SpotifyService) {
    
   }

  ngOnInit(): void {
  }
  
  buscar(termino:string){
    this.loading = true;
    if(termino){
      this.spotify.obetenerArtista(termino).subscribe((data:any) => {
        this.artistas = data;
        this.loading = false;
      });
    }else{
      this.loading = false;
      this.artistas = [];
    }
  }

}
