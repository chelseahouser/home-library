import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Book, BookDocument } from '../schemas/book.schema';
import { CreateBookDto } from '../dtos/create-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as isbn from 'node-isbn';

@Injectable()
export class ISBNService {
  constructor(
    @InjectModel(Book.name) private readonly model: Model<BookDocument>,
  ) {}

  async find(isbnToFind: string): Promise<CreateBookDto> {
    return isbn
      .resolve(isbnToFind)
      .then(function (book) {
        return new CreateBookDto(
          isbnToFind,
          book.title,
          book.authors.join(','),
          book.description,
          book.categories,
        );
      })
      .catch(function (err) {
        return new CreateBookDto(isbnToFind, 'Book Not Found', err);
      });
  }
}
