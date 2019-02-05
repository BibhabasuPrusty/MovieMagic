import {Component,OnInit} from '@angular/core'
import { MusicService } from './music.service';
import { IMusic } from './music.model';

@Component({

templateUrl:'./music.component.html'
    
})

export class MusicComponent implements OnInit
{
    musicList:IMusic[];    
    artists:any[];
    albums:any[];
    

    constructor(private _service:MusicService)
    {}

    ngOnInit():void
    {         
    
      this._service.getAllArtists()
     .subscribe((response)=>this.musicList=response[0]);  
          

    }
   
}