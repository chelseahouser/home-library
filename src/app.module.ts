import { Module } from '@nestjs/common';
import { BooksModule } from './modules/books/books.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('connectionString'), BooksModule],
})
export class AppModule {}
