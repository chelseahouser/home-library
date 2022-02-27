import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
  @ApiProperty({ description: 'Identifier for the Book in the library.' })
  _id: string;

  @ApiProperty({ description: 'Title of the Book' })
  title: string;

  @ApiProperty({ description: 'Author of the Book' })
  author: string;

  @ApiProperty({ description: 'ISBN-13 Identifier for the Book' })
  isbn?: string;

  @ApiProperty({ description: 'The official description of the book.' })
  description?: string;

  @ApiProperty({ description: 'Personal summary of the book.' })
  summary?: string;

  @ApiProperty({ description: 'Personal notes about the book.' })
  notes?: string;

  @ApiProperty({
    description: 'Boolean value denoting if the book is recommended',
  })
  recommended?: boolean;

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
