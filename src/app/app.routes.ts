import {Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

export const Route: Routes = [
    { path:'home', component: HomeComponent },
    { path:'search', component: SearchComponent },
    { path:'artista', component: ArtistaComponent },
    { path:'',pathMatch:'full', redirectTo:'home' },
    { path:'**',pathMatch:'full', redirectTo:'home' }
] ;
