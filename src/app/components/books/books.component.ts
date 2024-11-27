import { Component, inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { BookService } from '../../services/book.service';
import { BookData } from '../../models/books.model';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  private bookService = inject(BookService);
  private books: BookData[] = [];

  dataSource = new MatTableDataSource<BookData>([]);
  displayedColumns: string[] = [];

  ngOnInit(): void {
  
    this.bookService.getBooks()
      .subscribe(data => {
        this.books = data.map(item => (<BookData>{
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          images: item.volumeInfo.imageLinks,
        }));
        this.dataSource.data = this.books;
        this.displayedColumns = Object.keys(this.books[0]);
        console.log('this.displayedColumns: ', this.displayedColumns);
        console.log('this.books: ', this.books);
      });
  }
}
