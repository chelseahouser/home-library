import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from '../controllers/books.controller';
import { BooksService } from '../services/books.service';
import { CreateBookDto } from '../dtos/create-book.dto';

describe('BookController', () => {
  let bookController: BooksController;
  const testBook: any = {
    title: 'Test Book Title',
    author: 'Test Book Author',
    isbn: '9781234560123',
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    bookController = app.get<BooksController>(BooksController);
  });

  describe('root', () => {
    it('should create a book', async () => {
      const createBook: CreateBookDto = {
        isbn: testBook.isbn,
        title: testBook.title,
        author: testBook.author,
      };
      expect((await bookController.create(createBook)).title).toBe(
        testBook.title,
      );
    });

    it('should return an array of all books', async () => {
      expect((await bookController.index())[0].title).toBe(testBook.title);
    });
  });
});
