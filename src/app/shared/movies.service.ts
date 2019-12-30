import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Movie } from './movie';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseurl = 'http://localhost:3000';
  private movieurl= 'http://localhost:3000/movies';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  // Create
  CreateMovie(data): Observable<Movie> {
    return this.http.post<Movie>(this.baseurl + '/movies/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  

// GET
GetMovie(id): Observable<Movie> {
  const url = `${this.movieurl}/${id}`;
  return this.http.get<Movie>(url)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
}

// GET ALL
GetMovies(): Observable<Movie[]> {
  return this.http.get<Movie[]>(this.movieurl)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
}

 // PUT
 UpdateMovie(id, data): Observable<Movie> {
  return this.http.put<Movie>(this.baseurl + '/movies' + id,JSON.stringify(data), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
}



 // DELETE
 DeleteMovie(id){
  return this.http.delete<Movie>(this.baseurl + '/movies/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
}


  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
