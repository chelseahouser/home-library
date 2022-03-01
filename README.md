## Description
This is application is a NestJS API for creating managing my home library.

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