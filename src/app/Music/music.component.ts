import {Component,OnInit} from '@angular/core'
import { MusicService } from './music.service';
import { IMusic } from './music.model';

@Component({

templateUrl:'./music.component.html'
    
})

export class MusicComponent implements OnInit
{
    musicList:any[];    
    artists:any[];
    albums:any[];
    

    constructor(private _service:MusicService)
    {}

    ngOnInit():void
    {
        
    //     this._service.getAllArtists()
    // .subscribe((data)=>this.musicList=data);  
    //  console.log(this.musicList);
    
    // this.artists=this.musicList["artists"];
    // console.log(this.artists);

      // console.log(this.musicList[0].name);
       
    //    this._service.getAllArtists().subscribe(
    //     res => {
    //         let albums= res["artists"];
    //         //let album = albums[0];
    //         .log(albumconsoles);
    //     }
    // );

    let obs=this._service.getAllArtists();
    obs.subscribe((response)=>this.musicList=(response[0]));
    
    
         this._service.getAllArtists()
     .subscribe((data)=>console.log(data[1]));  
      //console.log(this.albums);


        // .subscribe((data)=>this.musicList=data);  

    //let albums= this.musicList["artists"];
    //this.artists=albums;
     //this.artists=this.musicList[0];
    //console.log(obs["artists"]);

    }
   
}