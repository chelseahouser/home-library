import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { CreateBookDto } from '../dtos/create-book.dto';
import { ApiOperation } from '@nestjs/swagger';
import { ISBNService } from '../services/isbn.service';

@Controller()
export class BooksController {
  constructor(
    private readonly service: BooksService,
    private readonly isbnService: ISBNService,
  ) {}

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

  @Post(':isbn')
  @ApiOperation({ description: 'Add a book to the library by ISBN.' })
  async createByISBN(@Param() params) {
    const bookToCreate = await this.isbnService.find(params.isbn);
    return await this.service.create(bookToCreate);
  }
}