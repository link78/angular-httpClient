import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { Movie } from '../shared/movie';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  movieList: any= [];
  

  constructor( private movieService: MoviesService) { }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
  return  this.movieService.GetMovies()
    .subscribe((data: {})=> {
      this.movieList = data;
    });
  }

  deleteMovie(data) {
    var index = index = this.movieList.map(x=> {return x.title})
    .indexOf(data.title);
    return this.movieService.DeleteMovie(data.id).subscribe(res => {
      this.movieList.splice(index,1)
      console.log('Movie deleted')
    });
  }
}
