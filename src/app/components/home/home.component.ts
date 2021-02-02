import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ultimasCanciones: any[] = [];
  constructor(private spotify:SpotifyService, http:HttpClient) { 

    this.spotify.obtenerUltimosRegistros().subscribe((response:any) => {
      console.log(response);
      this.ultimasCanciones = response;
    });
  }

  ngOnInit(): void {
  }
 
}

// Generar el token
// POST https://accounts.spotify.com/api/token
// grant_type = client_credentials
// client_id = bd0e71c0dc04485f940bcc34c658b5a9
// client_secret =a86ea6dd641c470a94027f887c5cd29c
