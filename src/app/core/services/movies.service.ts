import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  FetchTopStories():Observable<Movies[]>
  {
      return this.http.get<Movies[]>(`${environment.apiUrl}/movies`)
  }

  FetchSingle(data):Observable<Movies>
  {
    return this.http.get<Movies>(`${environment.apiUrl}/movies/${data}`)
  }

  searchMovies(data):Observable<Movies[]>
  {
      return this.http.get<Movies[]>(`${environment.apiUrl}/movies?q=${data}`)
  }
}
