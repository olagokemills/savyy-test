import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { Movies } from 'src/app/core/models/movies.model';
import { GlobalsService } from 'src/app/core/services/globals.service';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
selectedMovie:Movies;
  constructor(
    private route :ActivatedRoute,
    private movies: MoviesService,
    private gVars: GlobalsService
  ) { }

  ngOnInit(): void {
    this.fetchSingleMovie(this.route.snapshot.params['slug'])
  }


  fetchSingleMovie =(data)=>{
    this.gVars.spinner.show()
    this.movies.FetchSingle(data).subscribe(
      res=>{
        this.gVars.spinner.hide()
        if(res)
        {
          this.selectedMovie = res
        }
        else{
          this.gVars.toastr.error('Unable to retrieve that movie','...Redirecting')
          setTimeout(() => {
            this.gVars.router.navigate(['/'])
          }, 1500);
        }
      },err=>{
        this.gVars.toastr.error('Unable to retrieve that movie','...Redirecting')
          setTimeout(() => {
            this.gVars.router.navigate(['/'])
          }, 1500);
      }
    )
  }

}
