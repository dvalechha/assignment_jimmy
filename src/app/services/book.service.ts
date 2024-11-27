import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

import { BookData } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private httpClient = inject(HttpClient);
  private booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=%22stephen%20king%22&key=AIzaSyDgREt8NYUbcruFXvlhNrZVSQo6JTAC5Yk%0A';

  getBooks = (): Observable<any[]> => {
    return this.httpClient.get<any>(this.booksUrl)
      .pipe(
        tap(data => console.log('\n\n getBooks: data: ', data)),
        map(data => data.items),
      );
  }
}
