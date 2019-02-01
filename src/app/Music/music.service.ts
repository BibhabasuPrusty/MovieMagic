import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IMusic } from './music.model';



@Injectable()


export class MusicService
{
  private _musicUrl='http://ngmusicdb.herokuapp.com/api/getMusic';
  constructor(private _http:HttpClient)
  {

  }

  getAllArtists():Observable<any[]>
  {
    return this._http.get<any[]>(this._musicUrl);   
   

  }


}