import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalsService } from 'src/app/core/services/globals.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm: string;

  constructor(
    private route: ActivatedRoute,
    public gVars:GlobalsService
  ) { }

  ngOnInit(): void {
    this.searchTerm  = this.route.snapshot.params['query']
  }
 

}
