## Description
This is application is a NestJS API for creating managing my home library. Yes I know that applications that build up collections of books are a dime a dozen, however this was designed to answer a specific question I had: Where in the world is my copy of "The Unicorn Project"? I realized I couldn't even remember if I had it in hard copy on a bookcase somewhere in my home or office, or if it was an audiobook in my audible account. In the end I did find it in my kindle library. I intend with this application to compile a collection of all of my books, including those in digital formats. I am also able to make updating book information such as my reviews and descriptions in a way that I can export them directly to my website.

## TODO

- Import google library from google books api
- Find a way to connect to amazon, since no public APIs exist
- Host this API somewhere that I can manage it outside of my local environment.
- Build up tests, planning to stick with Jest here
- Create a UI around this?

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Database

This application connects to an instance of MongoAtlas. The connection string is stored under 'dbConnectionString' in a Google Secret Manager Collection. To set this up for yourself, you will need to create an instance of a Mongo Atlas DB, create an api user with access to a 'books' collection. Add the connection string to your own instance of Google Secret Manager under the key above. Then update the local configuration to grant access to your secrets manager.

## Swagger

To access the swagger documentation run the project with 'npm run start' and navigate to http://localhost:3000/api