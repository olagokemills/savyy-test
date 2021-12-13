import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/core/models/movies.model';
import { GlobalsService } from 'src/app/core/services/globals.service';
import { MoviesService } from 'src/app/core/services/movies.service';
 
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  moviesList: Movies;
  GenreList = [];
  constructor(
    private movies: MoviesService,
    private gVars: GlobalsService
  ) { }
  
  ngOnInit(): void {
    this.FetchMovies()
  }


 FetchMovies()
  {
    this.gVars.spinner.show()
    this.movies.FetchTopStories().subscribe(
      (res:any)=>{
        this.gVars.spinner.hide()
        res.movies.forEach(element =>{
          element.genres.forEach(categories => {
            if(this.GenreList.includes(categories)) 
            {
              return
            }
            else{
             this.GenreList.push(categories)
            }
          });
        })
       this.moviesList =  res.movies
      },
      err=>{
        this.gVars.toastr.error('Unable to retrieve the list','...Reloading')
        setTimeout(() => {
          window.location.reload()
        }, 1500);
      }
    )
  }

}
