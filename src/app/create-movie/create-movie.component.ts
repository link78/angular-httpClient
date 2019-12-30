import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from '../shared/movies.service';


@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
movieForm : FormGroup;
movieData: any = [];

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public movieService: MoviesService
  ) { }

  ngOnInit() {
    this.addMovie();
  }

  addMovie(){
    this.movieForm = this.fb.group({
    title: [''],
    genre: [''],
    price: [''],
    released: ['']
    });
  }

  submitForm(){
    this.movieService.CreateMovie(this.movieForm.value)
    .subscribe(res => {
      console.log('Movie Added')
      this.ngZone.run(() => this.router.navigateByUrl('/movies-list'))
    });
  }

}
