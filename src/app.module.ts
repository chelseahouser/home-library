import { Module } from '@nestjs/common';
import { BooksModule } from './modules/books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config.service';
import { ConfigModule } from './config.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: await configService.getDatabaseConnectionStringConfig(),
      }),
      inject: [ConfigService],
    }),
    BooksModule,
  ],
})
export class AppModule {}
