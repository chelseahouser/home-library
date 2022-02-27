import { ApiProperty } from '@nestjs/swagger';

export class BulkCreateBookDto {
  @ApiProperty({ description: 'ISBN-13 Identifier for the Books' })
  isbns: string[];

  @ApiProperty({ description: 'Location of the books to add' })
  location: string;

  @ApiProperty({ description: 'Format of the books to add' })
  format: string;
}
