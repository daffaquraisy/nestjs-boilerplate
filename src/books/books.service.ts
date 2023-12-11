import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { findBookById } from './books.queries';

@Injectable()
export class BooksService {
  constructor(private dataSource: DatabaseService) { }

  async getBooks() {
    try {
      const books = await findBookById.run(
        {
          bookId: 1
        },
        this.dataSource,
      )

      return books;
    } catch (error) {
      throw error;
    }
  }
}
