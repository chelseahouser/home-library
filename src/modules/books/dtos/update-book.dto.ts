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
}
