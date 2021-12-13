import { Routes } from '@angular/router'
import { HomeComponent } from './pages/movies/home/home.component';

export const appRoutes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent,
        loadChildren:()=> import('./pages/movies/movies.module').then(m=>m.MoviesModule)
    }
];