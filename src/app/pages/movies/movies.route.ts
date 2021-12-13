import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListingsComponent } from './listings/listings.component';
import { SearchComponent } from './search/search.component';

export const HomeRoutes:Routes = [
    { path:'' ,component:ListingsComponent},
    { path:'details/:slug', component:DetailsComponent},
    { path:'search/:query', component:SearchComponent},
]