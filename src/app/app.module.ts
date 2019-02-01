import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MovieComponent } from './Movies/movie.component';
import { MusicComponent } from './Music/music.component';
import { NotFoundComponent } from './Shared/NotFoundComponent';
import { MusicService } from './Music/music.service';
import { MovieService } from './Movies/movie.service';
import { MovieSideComponent } from './Movies/moviesideview.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MusicComponent,
    MovieSideComponent,   
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
       {path:'movies',component:MovieComponent},
       {path:'music',component:MusicComponent},
       {path:'side',component:MovieSideComponent},
       {path: '', redirectTo: 'movies' , pathMatch: 'full'},
       {path: '**', component: NotFoundComponent},

    ]),
    

    HttpClientModule
  ],
  providers: [MusicService,
    MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
