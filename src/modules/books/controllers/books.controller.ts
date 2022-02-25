import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { CreateBookDto } from '../dtos/create-book.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class BooksController {
  constructor(private readonly service: BooksService) {}

  @Get()
  @ApiOperation({ description: 'Get all books in the library.' })
  async index() {
    return await this.service.getAllBooks();
  }

  @Post()
  @ApiOperation({ description: 'Add a book to the library.' })
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.service.create(createBookDto);
  }
}
