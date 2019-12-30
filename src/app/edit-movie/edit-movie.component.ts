import { Component, OnInit, NgZone } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movieList: any[];
  updateMovieForm: FormGroup;


  constructor(
    private actRoute: ActivatedRoute,
    private movieService: MoviesService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.movieService.GetMovie(id).subscribe((data) => {
      this.updateMovieForm = this.fb.group({
        title: [data.title],
        genre: [data.genre],
        price: [data.price],
        released: [data.released]
        
      });
    });

   }

  ngOnInit() {
    this.updateForm();
  }


  updateForm(){
    this.updateMovieForm = this.fb.group({
      title: [''],
      genre: [''],
      price: [''],
      released: ['']
    });
  }

  submitForm() {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.movieService.UpdateMovie(id, this.updateMovieForm.value)
    .subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/movies-list'))
    });
  }
}
