import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
//import { IMovie } from './movie.model';


@Injectable()


export class MovieService
{
  private _movieUrl='https://ngmovies.herokuapp.com/api/getMovies';
  constructor(private _http:HttpClient)
  {

  }

  getMovies():Observable<any[]>
  {
    return this._http.get<any[]>(this._movieUrl);      

  }


}