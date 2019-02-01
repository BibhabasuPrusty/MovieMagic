import {Component,OnInit} from '@angular/core';
import { MovieService } from './movie.service';

@Component({

templateUrl:'./movie.component.html'
    
})

export class MovieComponent implements OnInit
{
   movies:any[];
   constructor(private _movies:MovieService)
   {}

   ngOnInit():void{
this._movies.getMovies()
.subscribe((data)=> this.movies=data);

   }

}