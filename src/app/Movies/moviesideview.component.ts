import {Component,OnInit} from '@angular/core';
import { MovieService } from './movie.service';

@Component({

templateUrl:'./moviesideview.component.html'
    
})

export class MovieSideComponent implements OnInit
{

   movies:any[];
   ShowSideView:Boolean=false;
   movieName:String;
   imagePath:String;
   mlanguage:String;
   mtype:String;

   constructor(private _movies:MovieService)
   {}

   ngOnInit():void{
         this._movies.getMovies()
         .subscribe((data)=> this.movies=data);

   }

   DisplaySideView(name:String,imageUrl:String,language:String,type:String):void{
   
      this.movieName=name;
      this.imagePath=imageUrl;
      this.mlanguage=language;
      this.mtype=type;      
     this.ShowSideView=!this.ShowSideView;
   }

}