import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Book, BookDocument } from '../schemas/book.schema';
import { CreateBookDto } from '../dtos/create-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateBookDto } from '../dtos/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private readonly model: Model<BookDocument>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    return await new this.model({
      ...createBookDto,
      createdAt: new Date(),
    }).save();
  }

  async update(updateBookDto: UpdateBookDto): Promise<Book> {
    const Book = new this.model({
      ...updateBookDto,
      updatedAt: new Date(),
    });
    return await Book.updateOne(updateBookDto);
  }

  async getAllBooks(): Promise<Book[]> {
    return await this.model.find().exec();
  }
}
