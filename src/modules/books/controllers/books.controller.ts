import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { CreateBookDto } from '../dtos/create-book.dto';

@Controller()
export class BooksController {
  constructor(private readonly service: BooksService) {}

  @Get()
  async index() {
    return await this.service.getAllBooks();
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.service.create(createBookDto);
  }
}
