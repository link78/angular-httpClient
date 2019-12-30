import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateMovieComponent } from './create-movie/create-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ListMovieComponent} from './list-movie/list-movie.component';

const routes : Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/add-movie'},
    { path: 'add-movie', component: CreateMovieComponent },
    { path: 'edit-movie/:id', component: EditMovieComponent },
    {path: 'movies-list', component: ListMovieComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }