# Scholar Sync API — GraphQL

API GraphQL para la gestión de usuarios y de un foro de publicaciones y respuestas,
con autenticación JWT y control de acceso por roles. Toda la API se expone a través de
un único endpoint: `POST /graphql`.

## Tabla de Contenido

1. [Descripción General](#1-descripción-general)
2. [Tecnologías](#2-tecnologías)
3. [Cómo Ejecutar](#3-cómo-ejecutar)
4. [Autenticación y Roles](#4-autenticación-y-roles)
5. [Esquema GraphQL](#5-esquema-graphql)
6. [Queries](#6-queries)
7. [Mutations](#7-mutations)
8. [Manejo de Errores](#8-manejo-de-errores)
9. [Pruebas](#9-pruebas)
10. [Limitaciones](#10-limitaciones)

---

## 1. Descripción General

Scholar Sync expone tres entidades principales a través de GraphQL:

| Entidad | Descripción |
| ------- | ----------- |
| `User`  | Usuarios de la plataforma (registro, consulta, edición, baja). |
| `Post`  | Publicaciones del foro, pertenecen a un usuario. |
| `Reply` | Respuestas a una publicación (o a otra respuesta), con likes y validación. |

Los services, las entidades de TypeORM y la base de datos no cambian respecto a la
versión anterior: solo cambia la capa de exposición, que pasó de múltiples rutas REST a
un único endpoint GraphQL.

---

## 2. Tecnologías

| Tecnología | Uso |
| ---------- | --- |
| NestJS 11 | Framework principal |
| @nestjs/graphql + @nestjs/apollo + @apollo/server | Servidor GraphQL (code-first) |
| graphql | Runtime de GraphQL |
| TypeORM 0.3 | ORM para PostgreSQL |
| PostgreSQL 16 | Base de datos relacional |
| @nestjs/jwt + passport-jwt | Autenticación con tokens JWT |
| bcrypt | Hash de contraseñas |
| class-validator | Validación de inputs |
| Jest + supertest | Pruebas unitarias y e2e |
| Docker Compose | Contenedor de PostgreSQL |
| Bun | Gestor de paquetes |

El esquema se genera automáticamente (code-first) a partir de los decoradores y se
escribe en `src/schema.gql`.

---

## 3. Cómo Ejecutar

### Variables de entorno (`.env`)

Copiar `.env.example` a `.env`:

```env
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=mydatabase
DB_PORT=5432
DB_HOST=localhost
DB_TYPE=postgres
DB_SYNCHRONIZE=true
JWT_SECRET=superSecretKey123
JWT_EXPIRES_IN=1h
PORT=3001
```

Si existe `DATABASE_URL` (Railway/Heroku), se usa en su lugar con SSL habilitado.

### Pasos

```bash
cd nestJS-scholar-sync
cp .env.example .env
docker-compose up -d        # levanta PostgreSQL
bun install
bun run start:dev           # arranca en http://localhost:3001
```

La primera vez, al arrancar, TypeORM crea las tablas (`synchronize=true`). Luego cargar
el seed:

```bash
psql -h localhost -U postgres -d mydatabase -f inserts.sql
# Windows (PowerShell):
# Get-Content inserts.sql | docker exec -i postgres-db-1 psql -U postgres -d mydatabase
```

### Playground

Con la app corriendo, abrir `http://localhost:3001/graphql` para explorar el esquema y
ejecutar queries/mutations desde el navegador (Apollo Sandbox, introspección habilitada).

---

## 4. Autenticación y Roles

La autenticación es **stateless** con JWT. El flujo:

1. Ejecutar la mutation `login` con email y contraseña.
2. La respuesta incluye `access_token`.
3. Enviar ese token en cada operación protegida mediante el header
   `Authorization: Bearer <access_token>`.

### Roles

| Rol | Capacidad |
| --- | --------- |
| `Admin` (superadmin) | Crear, modificar y eliminar cualquier usuario y cualquier recurso. |
| `Student` (usuario regular) | Autenticarse, consultar recursos y gestionar los suyos propios. |
| `Professor` / `TA` | Validar respuestas del foro (`validateReply`). |

### Reglas de acceso

- `login` y `createUser` (registro) son **públicas**.
- El resto de queries y mutations requieren un token válido.
- `updateUser` / `removeUser`: solo `Admin`, o el propio usuario sobre su cuenta
  (en el caso de `removeUser`, solo `Admin`).
- `updatePost` / `removePost`, `updateReply` / `removeReply`: solo `Admin` o el dueño del recurso.
- `validateReply`: solo `Professor` o `TA`.

### Usuarios del seed

Todos con la contraseña `Password123`:

| Email | Rol |
| ----- | --- |
| `alice@example.com` | Student |
| `bob@example.com` | Student, TA |
| `carol@example.com` | Student |
| `dave@example.com` | Admin |
| `eve@example.com` | Professor |

---

## 5. Esquema GraphQL

```graphql
type User {
  id: Int!
  email: String!
  firstName: String!
  lastName: String!
  profilePic: String
  major1: String!
  major2: String
  xp: Int!
  level: Int!
  posts: [Post!]
  replies: [Reply!]
}

type Post {
  id: Int!
  title: String!
  question: String!
  dateAdded: DateTime!
  user: User!
  replies: [Reply!]
}

type Reply {
  id: Int!
  replyMessage: String!
  dateAdded: DateTime!
  likes: Int!
  approvals: Int!
  isValidated: Boolean!
  user: User!
  post: Post!
  replies: [Reply!]
}

type AuthPayload { access_token: String! }
type MessageResponse { message: String! }
```

`DateTime` es el scalar ISO-8601 de `@nestjs/graphql`. El campo `password` nunca se
expone en el esquema.

---

## 6. Queries

| Query | Auth | Descripción |
| ----- | ---- | ----------- |
| `users` | Token | Lista de usuarios |
| `user(id: Int!)` | Token | Un usuario por ID |
| `posts` | Token | Lista de publicaciones |
| `post(id: Int!)` | Token | Una publicación por ID |
| `replies` | Token | Lista de respuestas |
| `reply(id: Int!)` | Token | Una respuesta por ID |

Ejemplo:

```graphql
query {
  posts {
    id
    title
    user { id email }
    replies { id replyMessage likes }
  }
}
```

---

## 7. Mutations

| Mutation | Auth | Descripción |
| -------- | ---- | ----------- |
| `login(input: LoginInput!)` | Pública | Devuelve `AuthPayload` con el token |
| `logout` | Token | Mensaje de cierre de sesión |
| `createUser(input: CreateUserInput!)` | Pública | Registro de usuario |
| `updateUser(id: Int!, input: UpdateUserInput!)` | Token (dueño o Admin) | Actualiza un usuario |
| `removeUser(id: Int!)` | Token (Admin) | Elimina un usuario |
| `createPost(input: CreatePostInput!)` | Token | Crea una publicación |
| `updatePost(id: Int!, input: UpdatePostInput!)` | Token (dueño o Admin) | Actualiza una publicación |
| `removePost(id: Int!)` | Token (dueño o Admin) | Elimina una publicación |
| `createReply(input: CreateReplyInput!)` | Token | Crea una respuesta |
| `updateReply(id: Int!, input: UpdateReplyInput!)` | Token (dueño o Admin) | Actualiza una respuesta |
| `removeReply(id: Int!)` | Token (dueño o Admin) | Elimina una respuesta |
| `likeReply(id: Int!)` | Token | Suma un like a una respuesta |
| `validateReply(id: Int!)` | Token (Professor/TA) | Valida una respuesta |

Ejemplos:

```graphql
# Login (público)
mutation {
  login(input: { email: "dave@example.com", password: "Password123" }) {
    access_token
  }
}

# Crear una publicación (requiere header Authorization: Bearer <token>)
mutation {
  createPost(input: { userId: 1, title: "Ayuda", question: "Cómo uso GraphQL?" }) {
    id
    title
  }
}
```

---

## 8. Manejo de Errores

- Las entradas se validan con `class-validator` mediante un `ValidationPipe` global; los
  datos inválidos producen errores GraphQL con el detalle de la validación.
- Las excepciones de Nest (`NotFoundException`, `ConflictException`,
  `UnauthorizedException`, `ForbiddenException`) se devuelven como errores GraphQL con su
  código en `extensions.code`.
- En GraphQL, las respuestas con error usan HTTP 200 y el detalle viaja en el arreglo
  `errors` del cuerpo.

---

## 9. Pruebas

### Unitarias (Jest)

```bash
bun run test          # pruebas unitarias de los services
bun run test:cov      # con cobertura
```

### Integración E2E (supertest)

Las pruebas e2e levantan la aplicación completa contra PostgreSQL y ejecutan operaciones
contra `/graphql`. Requieren la base de datos corriendo y con el seed aplicado.

```bash
bun run test:e2e
```

Cubren: `login` correcto y fallido, registro y baja de usuarios con control de acceso,
y el ciclo completo de publicaciones y respuestas (crear, listar, dar like, borrar).

### Postman

Importar `scholar-sync.graphql.postman_collection.json`. Ejecutar primero `login`,
copiar el `access_token` en la variable `token` y luego ejecutar el resto de peticiones.

---

## 10. Limitaciones

- La API expone únicamente usuarios, publicaciones y respuestas. Los módulos de roles,
  permisos, cursos, insignias y sesiones de apoyo conservan sus datos y entidades pero no
  se exponen por la API tras la migración a GraphQL.
- La asignación de roles a los usuarios se realiza mediante el seed (`inserts.sql`), no a
  través de la API.
