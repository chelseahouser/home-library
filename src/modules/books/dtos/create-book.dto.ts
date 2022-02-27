import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  constructor(
    isbn: any,
    title: string,
    author?: string,
    description?: string,
    categories?: string[],
  ) {
    this.isbn = isbn;
    this.title = title;
    this.author = author ?? '';
    this.description = description ?? '';
    this.categories = categories ?? [];
  }

  @ApiProperty({ description: 'Title of the Book' })
  title: string;

  @ApiProperty({ description: 'Author of the Book' })
  author: string;

  @ApiProperty({ description: 'ISBN-13 Identifier for the Book' })
  isbn?: string;

  @ApiProperty({ description: 'The official description of the book.' })
  description?: string;

  @ApiProperty({
    description: 'An array of categories the book topic fits into.',
  })
  categories?: string[];

  @ApiProperty({
    description: 'A string value to note location of the book',
  })
  location?: string;

  @ApiProperty({
    description: 'Format the book is (Hardcover, Paperback, Digital)',
  })
  format?: string;
}
