# Projeto-Tecnico-S3-M6

Projeto fullstack realizado em Node.js com o framework express,banco de dados relacional Postgres e React com Typescript. Esse teste técnico tem o intuito de criar usuarios que podem criar diversos contatos vinculados a eles, ou seja, uma agenda eletrônica.

## Etapas em desenvolvimento

Itens em desenvolvimento ou esperando para serem desenvolvidos

### Front-end

    - Poder adicionar mais de um email e telefone
    - Realizar Testes
    - Poder importar lista de contatos em PDF

### Back-end

    - Poder adicionar mais de um email e telefone
    - Aumentar cobertura de Testes

### Ambos

    - Adicionar em um conteiner(Docker)

## Como Rodar a Aplicação

**Vale pontuar que o NODE deve estar instalado na máquina**

_O gerenciador de arquivos usado foi o yarn mais pode ser usado o npm_

### Início

Realizar o clone do repositório. Na pasta raiz executar os seguintes comandos:

Para inicializar o Backend:

```shell
  cd Backend
```

```shell
  yarn
```

criar um arquivo .env com os paramêtros de banco de dados e de usuário do postgres.

```shell
  POSTGRES_USER=
  POSTGRES_PASSWORD=
  POSTGRES_DB=
  JWT_SECRET=
  ADM_PASSWORD=
```

Rodar as migrations do TypeORM

```shell
  yarn typeorm migration:run -d src/data-source.ts
```

Abrir o servidor

```shell
  yarn dev
```

Caso deseje testar apenas o backend com requisições diretas, o usuário ADM padrão é:

```shell
  email = root@root.com
  senha = ADM_PASSWORD ou 123456 quando não aplicado no arquivo .env
```

Com o servidor do backend funcionado, deve-se abrir um novo terminal na raiz do projeto e executar os seguintes comandos, para inicializar o frontend:

```shell
  cd Frontend
```

```shell
  yarn
```

Para inicializar o Frontend:

```shell
  yarn start
```

## TESTES

### Testes Backend

Para todar os testes deve-se estar na raiz do projeto e aplicar os seguintes comandos:

```shell
  cd Backend
```

```shell
  yarn test
```

### Testes Frontend

**EM DESENVOLVIMENTO**

## Endpoints - API

## 1. **Users**

O objeto User é definido como:

| Campo     | Tipo    | Descrição                                    |
| --------- | ------- | -------------------------------------------- |
| id        | string  | Identificador único do usuário               |
| firstName | string  | O nome do usuário.                           |
| lastName  | string  | O sobrenome do usuário.                      |
| phone     | boolean | O telefone do usuário.                       |
| email     | objeto  | O e-mail do usuário.                         |
| password  | string  | A senha de acesso do usuário                 |
| createdAt | Date    | Indica data de criação do usuário            |
| updatedAt | Date    | Indica data de última atualização do usuário |
| contacts  | Array   | Todos os contatos vinculados a esse usuário  |

### Endpoints

| Método | Rota       | Descrição                                 |
| ------ | ---------- | ----------------------------------------- |
| POST   | /users     | Criação de um usuário.                    |
| GET    | /users     | Lista todos os usuários - apenas o ADM    |
| GET    | /users/:id | Lista o próprio usuário                   |
| DELETE | /users/:id | Deleta o usuário                          |
| PATCH  | /users/:id | Atualiza campos do usuário passado por ID |

---

### 1.1. **Criação de Usuário**

### `/users`

### Exemplo de Request:

```
POST /users
Authorization: Token
```

### Corpo da Requisição:

```json
{
  "firstName": "Wyller",
  "lastName": "Fernandes",
  "phone": "41999999999",
  "email": "wyller@wyller.com",
  "password": "123456"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "47468317-f47e-40ed-b231-af6fe70339f8",
  "firstName": "Wyller",
  "lastName": "Fernandes",
  "email": "wyller@kenzie.com",
  "phone": "41999999999",
  "created_at": "2022-11-29T11:39:42.518Z",
  "updated_at": "2022-11-29T11:39:42.518Z",
  "isAdm": false
  "contacts": []
}
```

### Possíveis Erros:

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 400 Conflict   | Email already registered. |

---

### 1.2. **Listando Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
GET /users
Authorization: Token e ser Administrador
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "d7b292cc-a4b2-4459-be2f-0e1a8c04ca5e",
    "firstName": "root",
    "lastName": "adm",
    "email": "root@root.com",
    "phone": "41999999999",
    "created_at": "2022-11-29T11:39:42.518Z",
    "updated_at": "2022-11-29T11:39:42.518Z",
    "isAdm": true
    "contacts": []
  },
  {
    "id": "47468317-f47e-40ed-b231-af6fe70339f8",
    "firstName": "Wyller",
    "lastName": "Fernandes",
    "email": "wyller@kenzie.com",
    "phone": "41999999999",
    "created_at": "2022-11-29T11:39:42.518Z",
    "updated_at": "2022-11-29T11:39:42.518Z",
    "isAdm": false
    "contacts": []
  }
]
```

### Possíveis Erros:

```JSON
{
	"message": "Invalid token"
}
```

ou

```JSON
{
	"message": "You're not the ADM"
}
```

---

### 1.3. **Atualizar um Usuário por ID**

### `/users/:id`

### Exemplo de Request:

```
PATCH /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Authorization: Token e usuário dono
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
{
  "firstName": "Wyller2",
  "lastName": "Fernandes2",
  "email": "wyller2@kenzie.com",
  "phone": "419999999992"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "User updated",
  "userdata": {
    "id": "0721c526-34d3-41ff-82b0-0a19394a146a",
    "firstName": "Wyller",
    "lastName": "Fernandes",
    "email": "wyller2@kenzie.com",
    "phone": "41955555555",
    "created_at": "2022-11-28T14:00:49.671Z",
    "updated_at": "2022-11-29T11:51:39.021Z",
    "isAdm": false,
    "contacts": []
  }
}
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 400 Not Found  | User not found. |

---

### 1.4. **Deletar um Usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:id`

### Exemplo de Request:

```
DELETE /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Authorization: Token e ser o dono do usuário
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```
vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Usuário deletado com sucesso!"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição           |
| --------------- | ------------------- |
| 409 Conflict    | User not found.     |
| 400 Bad Request | Usuário já deletado |

---

## 2. **Login**

### 2.1. **Login do Usuário**

### `/login`

### Exemplo de Request:

```
POST /login
Authorization: None
```

### Corpo da Requisição:

```json
{
  "email": "wyller@wyller.com",
  "password": "1234"
}
```

### Exemplo de Response:

```
200 Ok
```

```json
{
  "token": "ebJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6MSwiaWQiOiJiOTU1MmUzYS0wMWUzLTQ0MTMtOGE3Ni1kOWNjZGI2NzczOTMiLCFpYXQiOjE2NjMwOTc4MzQsImV4cCI6MTY2MzE4NDIzNH0.gw9R_KST5TdN__DMx6Aj83KKbwmX-4UbNArYu0DGJo2"
}
```

### Possíveis Erros:

| Código do Erro | Descrição           |
| -------------- | ------------------- |
| 403 Forbidden  | Invalid Credentials |

---

### 1.1. **Criação de um Contato**

### `/contacts`

### Exemplo de Request:

```
POST /contacts
Authorization: Token
```

### Corpo da Requisição:

```json
{
  "firstName": "Wyller_Contato",
  "lastName": "Fernandes",
  "phone": "41999999999",
  "email": "wyller@kenzie.com"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "26ec4d63-b785-44de-bcf2-3ddbc567f95b",
  "firstName": "Wyller_Contato",
  "lastName": "Fernandes",
  "email": "wyller@kenzie.com",
  "phone": "41999999999",
  "created_at": "2022-11-29T20:10:57.574Z",
  "updated_at": "2022-11-29T20:10:57.574Z",
  "user": "d7b292cc-a4b2-4459-be2f-0e1a8c04ca5e"
}
```

### 1.2. **Listando Contatos do Usuário**

### `/contacts`

### Exemplo de Request:

```
GET /contacts
Authorization: Token
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "41de310f-c408-44f5-b606-2c164db4f44d",
    "firstName": "Thaly",
    "lastName": "Fernandes",
    "email": "wyller2@kenzie.com",
    "phone": "419554763786",
    "created_at": "2022-11-28T19:42:38.390Z",
    "updated_at": "2022-11-29T11:30:30.338Z"
  },
  {
    "id": "a091b5cc-b2f2-4d6a-90bb-b0ba86b342dc",
    "firstName": "Lyner",
    "lastName": "Fernandes",
    "email": "wyller3@kenzie.com",
    "phone": "41999999999",
    "created_at": "2022-11-29T12:13:06.082Z",
    "updated_at": "2022-11-29T12:13:06.082Z"
  }
]
```

### Possíveis Erros:

```JSON
{
	"message": "Invalid token"
}
```

---

### 1.3. **Atualizar um Contato por ID**

### `/contacts/:id`

### Exemplo de Request:

```
PATCH /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Authorization: Token e usuário dono do contato
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                |
| --------- | ------ | ---------------------------------------- |
| id        | string | Identificador único do contato (Contact) |

### Corpo da Requisição:

```json
{
  "firstName": "Wyller2",
  "lastName": "Fernandes2",
  "email": "wyller2@kenzie.com",
  "phone": "419999999992"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "User updated",
  "userdata": {
    "id": "0721c526-34d3-41ff-82b0-0a19394a146a",
    "firstName": "Wyller",
    "lastName": "Fernandes",
    "email": "wyller2@kenzie.com",
    "phone": "41955555555",
    "created_at": "2022-11-28T14:00:49.671Z",
    "updated_at": "2022-11-29T11:51:39.021Z"
  }
}
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 400 Not Found  | User not found. |

---

### 1.4. **Deletar um Contato por ID**

### `/contacts/:id`

### Exemplo de Request:

```
DELETE /contacts/9cda28c9-e540-4b2c-bf0c-c90006d37893
Authorization: Token e ser o dono do contato
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                |
| --------- | ------ | ---------------------------------------- |
| id        | string | Identificador único do contato (Contact) |

### Corpo da Requisição:

```
vazio
```

### Exemplo de Response:

```
200 OK
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 400 Conflict   | User not found. |
