import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  constructor(isbn: any, title: string, author: string) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
  }

  @ApiProperty({ description: 'Title of the Book' })
  title: string;

  @ApiProperty({ description: 'Author of the Book' })
  author: string;
  
  @ApiProperty({ description: 'ISBN-13 Identifier for the Book' })
  isbn?: string;
}
