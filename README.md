# Movie Rental Service with TypeORM

This API was developed to meet the needs of a movie rental service. It offers endpoints to register new movies, list existing movies, update information, and remove movies. Therefore, it is a project that implements a platform for movie management and rental, utilizing the capabilities of TypeORM and other relevant technologies.

## Index

- [Technologies Used](#technologies-used)
- [Route Format](#route-format)
- [Application Rules](#application-rules)
- [Request Examples](#request-examples)

## Technologies Used

The following technologies were used in the development of this project:

[![Node.js](https://img.shields.io/badge/Node.js-v14.17.6-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v4.4.4-blue)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.18.2-blue)](https://expressjs.com/)
[![TypeORM](https://img.shields.io/badge/TypeORM-v0.3.17-orange)](https://typeorm.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v8.11.3-blue)](https://www.postgresql.org/)
[![zod](https://img.shields.io/badge/zod-v3.22.2-yellow)](https://github.com/vriad/zod)

## Route Format

The API routes follow this format:

- **POST /movies**: Registers a new movie.
- **GET /movies**: Lists all registered movies with pagination.
- **PATCH /movies/:id**: Updates a movie's data by ID.
- **DELETE /movies/:id**: Deletes a movie by ID.

## Application Rules

- The code is written in TypeScript.
- The zod library is used for data serialization.
- PostgreSQL is used for storing data.
- TypeORM is used to replace PG and PG-Format.
- The "Movie" entity represents movies in the system.

## Request Examples

### Register a New Movie

**Method:** POST  
**Endpoint:** /movies  
**Request Body:**
```json
{
  "id": 40,
  "duration": 60,
  "name": "Movie: Sem description",
  "price": 200
}
```

**Server Response:**

Status code: 201 CREATED

```json
{
  "id": 1,
  "name": "Movie: Sem description",
  "description": null,
  "duration": 60,
  "price": 200
}
```

### List Movies

**Method:** GET  
**Endpoint:** /movies  
**Request URL:** http://localhost:3000/movies/?sort=price&order=desc&page=2&perPage=3

**Server Response:**

Status code: 200 OK

```json
{
  "prevPage": "http://localhost:3000/movies?page=1&perPage=3",
  "nextPage": "http://localhost:3000/movies?page=3&perPage=3",
  "count": 14,
  "data": [
    {
      "id": 8,
      "name": "Filme 08",
      "description": null,
      "duration": 88,
      "price": 72
    },
    {
      "id": 4,
      "name": "Filme 04",
      "description": null,
      "duration": 75,
      "price": 72
    },
    {
      "id": 11,
      "name": "Filme 11",
      "description": null,
      "duration": 7,
      "price": 68
    }
  ]
}
```

### Update Movie

**Method:** PATCH  
**Endpoint:** /movies/:id  
**Request URL:** http://localhost:3000/movies/4  
**Request Body:**

```json
{
  "id": 55,
  "duration": 130,
  "price": 200
}
```

**Server Response:**

Status code: 200 OK

```json
{
  "id": 4,
  "name": "Filme 04",
  "description": null,
  "duration": 130,
  "price": 200
}
```

### Delete Movie

**Method:** DELETE  
**Endpoint:** /movies/:id  
**Server Response:**

Status code: 204 NO CONTENT

