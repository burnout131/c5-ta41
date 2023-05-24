import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';
import { Character } from './models/character';

const URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(URL+'characters/').pipe(
      catchError(this.handleError)
    );
  }

  getById(id: any): Observable<Character> {
    return this.http.get<Character>(URL+ 'characters/' + id).pipe(
      catchError(this.handleError)
    );
  }

  addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(URL+ 'characters/', character).pipe(
      catchError(this.handleError)
    );
  }

  modCharacter(id: number, character: Character): Observable<Character> {
    return this.http.put<Character>(URL+'characters/'+id, character).pipe(
      catchError(this.handleError)
    );
  }

  deleteCharacter(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/characters/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getRandom() {
    let randomItems = [];
    for (let i = 0; i < 8; i++) {
      randomItems.push(Math.floor(Math.random() * 100 + 1))
    }
    return randomItems;
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  };
}
