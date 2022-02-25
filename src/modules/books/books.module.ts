import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './controllers/books.controller';
import { Book, BookSchema } from './schemas/book.schema';
import { BooksService } from './services/books.service';
import { ISBNService } from './services/isbn.service';

@Module({
  providers: [BooksService, ISBNService],
  controllers: [BooksController],
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
})
export class BooksModule {}
