import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './shared/movies.service';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateMovieComponent,
    ListMovieComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
