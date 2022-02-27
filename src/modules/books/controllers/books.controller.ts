import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { CreateBookDto } from '../dtos/create-book.dto';
import { ApiOperation } from '@nestjs/swagger';
import { ISBNService } from '../services/isbn.service';
import { UpdateBookDto } from '../dtos/update-book.dto';
import { BulkCreateBookDto } from '../dtos/bulk-create-book.dto';

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

  @Get(':id')
  @ApiOperation({ description: 'Get a book by id.' })
  async getOneById(@Param() params) {
    return await this.service.getById(params.id);
  }

  @Get('search/:name')
  @ApiOperation({ description: 'Get books by a partial name.' })
  async searchByName(@Param() params) {
    return await this.service.search(params.name);
  }

  @Get('website/:id')
  @ApiOperation({
    description: 'Get book by id formated for adding to my website',
  })
  async getForWebsiteById(@Param() params) {
    return await this.service.getForWebsiteById(params.id);
  }

  @Post()
  @ApiOperation({ description: 'Add a book to the library.' })
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.service.create(createBookDto);
  }

  @Post('/bulk')
  @ApiOperation({
    description: 'Add a collection of books to the library by ISBN.',
  })
  async bulkCreateByISBN(@Body() bulkCreateBookDto: BulkCreateBookDto) {
    bulkCreateBookDto.isbns.forEach(async (isbn) => {
      const bookToCreate = await this.isbnService.find(isbn);
      bookToCreate.location = bulkCreateBookDto.location;
      bookToCreate.format = bulkCreateBookDto.format;

      await this.service.create(bookToCreate);
    });
    return;
  }

  @Post('/isbn/:isbn')
  @ApiOperation({ description: 'Add a book to the library by ISBN.' })
  async createByISBN(@Param() params) {
    const bookToCreate = await this.isbnService.find(params.isbn);
    return await this.service.create(bookToCreate);
  }

  @Put()
  @ApiOperation({ description: 'Update a book in the library.' })
  async update(@Body() updateBookDto: UpdateBookDto) {
    return await this.service.update(updateBookDto);
  }
}
