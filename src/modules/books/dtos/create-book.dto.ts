import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ description: 'Title of the Book' })
  title: string;
  @ApiProperty({ description: 'Author of the Book' })
  author: string;
  @ApiProperty({ description: 'ISBN-13 Identifier for the Book' })
  isbn?: string;
}
