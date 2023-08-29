# Locadora de Filmes com TypeORM

Essa API foi desenvolvida para atender às necessidades de um serviço de locação de filmes. Ela oferece endpoints para cadastrar novos filmes, listar filmes existentes, atualizar informações e remover filmes. Portanto, é um projeto que implementa uma plataforma para gerenciamento e locação de filmes, utilizando as capacidades do TypeORM e outras tecnologias relevantes.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Formato das Rotas](#formato-das-rotas)
- [Regras da Aplicação](#regras-da-aplicação)
- [Exemplos de Requisições](#exemplos-de-requisições)

## Tecnologias Utilizadas

Para o desenvolvimento deste projeto, foram utilizadas as seguintes tecnologias:

[![Node.js](https://img.shields.io/badge/Node.js-v14.17.6-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v4.4.4-blue)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.18.2-blue)](https://expressjs.com/)
[![TypeORM](https://img.shields.io/badge/TypeORM-v0.3.17-orange)](https://typeorm.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v8.11.3-blue)](https://www.postgresql.org/)
[![zod](https://img.shields.io/badge/zod-v3.22.2-yellow)](https://github.com/vriad/zod)

## Formato das Rotas

As rotas da API seguem o seguinte formato:

- **POST /movies**: Cadastra um novo filme.
- **GET /movies**: Lista todos os filmes cadastrados com paginação.
- **PATCH /movies/:id**: Atualiza os dados de um filme pelo ID.
- **DELETE /movies/:id**: Deleta um filme pelo ID.

## Regras da Aplicação

- O código é escrito em TypeScript.
- Utilização da biblioteca zod para serialização de dados.
- Banco de dados PostgreSQL é utilizado para armazenar os dados.
- TypeORM é utilizado para substituir PG e PG-Format.
- Entidade "Movie" representa os filmes no sistema.

## Exemplos de Requisições

### Cadastrar um Novo Filme

**Método:** POST  
**Endpoint:** /movies  
**Dados de Envio:**

```json
{
  "id": 40,
  "duration": 60,
  "name": "Movie: Sem description",
  "price": 200
}
```

**Resposta do Servidor:**

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

### Listar Filmes

**Método:** GET  
**Endpoint:** /movies  
**URL de Requisição:** http://localhost:3000/movies/?sort=price&order=desc&page=2&perPage=3

**Resposta do Servidor:**

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

### Atualizar Filme

**Método:** PATCH  
**Endpoint:** /movies/:id  
**URL de Requisição:** http://localhost:3000/movies/4  
**Dados de Envio:**

```json
{
  "id": 55,
  "duration": 130,
  "price": 200
}
```

**Resposta do Servidor:**

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

### Deletar Filme

**Método:** DELETE  
**Endpoint:** /movies/:id  
**Resposta do Servidor:**

Status code: 204 NO CONTENT
