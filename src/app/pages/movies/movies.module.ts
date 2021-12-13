import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './movies.route';
import { ListingsComponent } from './listings/listings.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, DetailsComponent, ListingsComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
