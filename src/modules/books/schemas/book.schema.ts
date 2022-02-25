import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  title?: string;

  @Prop()
  author?: string;

  @Prop()
  isbn?: string;

  @Prop()
  description?: string;

  @Prop()
  summary?: string;

  @Prop()
  notes?: string;

  @Prop()
  recommended?: boolean;

  @Prop()
  categories?: string[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
