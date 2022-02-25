import { ApiProperty } from '@nestjs/swagger';
import { Book } from '../schemas/book.schema';

export class WebsiteBookDto {
  constructor(book: Book) {
    this._id = book.isbn;
    this.title = book.title;
    this.author = book.author;
    this.description = book.summary;
    this.link = 'https://bookstorelink.com/' + book.isbn;
    this.currentlyReading = false;
    this.recommended = book.recommended;
    this.toRead = false;
  }

  @ApiProperty({ description: 'Identifier for the Book in the website.' })
  _id: string;

  @ApiProperty({ description: 'Title of the Book' })
  title: string;

  @ApiProperty({ description: 'Author of the Book' })
  author: string;

  @ApiProperty({ description: 'Personal summary of the book.' })
  description?: string;

  @ApiProperty({ description: 'Link to find the book for purchase.' })
  link?: string;

  @ApiProperty({
    description: 'Boolean value denoting if I am currently reading the book',
  })
  currentlyReading?: boolean;

  @ApiProperty({
    description: 'Boolean value denoting if I am planning to read the book',
  })
  toRead?: boolean;

  @ApiProperty({
    description: 'Boolean value denoting if the book is recommended',
  })
  recommended?: boolean;
}
