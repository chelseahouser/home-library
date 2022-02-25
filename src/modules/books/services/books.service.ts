import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Book, BookDocument } from '../schemas/book.schema';
import { CreateBookDto } from '../dtos/create-book.dto';
import { InjectModel } from '@nestjs/mongoose';

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

  async getAllBooks(): Promise<Book[]> {
    return await this.model.find().exec();
  }
}
