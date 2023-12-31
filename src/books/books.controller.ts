import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) { }

  @HttpCode(HttpStatus.OK)
  @Get('all')
  getBooks() {
    return this.booksService.getBooks();
  }
}
