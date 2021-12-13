import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalsService } from 'src/app/core/services/globals.service';
import { MoviesService } from 'src/app/core/services/movies.service';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  SearchForm: FormGroup;
  searchMode:boolean = false
  searchTerm:string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private movies: MoviesService,
    private gVars: GlobalsService
  ) { }

  ngOnInit(): void {
    this.SearchForm = this.fb.group({
      searchTerm: ['', Validators.required]
    })
  }
  ngOnChanges()
  {
    this.SearchMovie(this.SearchForm.value.searchTerm)
  }


  SearchMovie(data)
  {
    this.gVars.spinner.show()
    this.searchTerm = data.searchTerm
    this.movies.searchMovies(data.searchTerm).subscribe(
      (res:any)=>{
        this.gVars.spinner.hide()
        this.gVars.movieResult = res.movies
      }
    )
    this.router.navigate(['/home/search',data.searchTerm])
  }


}
