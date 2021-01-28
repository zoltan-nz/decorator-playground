# Playing with decorators and dependency injections

## Add Babel and TypeScript support

1. Install packages:

```bash
$ yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-watch babel-plugin-transform-typescript-metadata
```

2. Add `babel.config.json` to your project root:

```json
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }], ["@babel/preset-typescript"]],
  "plugins": ["babel-plugin-transform-typescript-metadata"],
  "sourceMaps": "inline"
}
```

## Database

Create a production database in mysql:

```mysql
DROP DATABASE IF EXISTS decorator_playground; CREATE DATABASE decorator_playground CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## API

For CRUD interface demo, let's create a basic point of sales API.

Categories and products:
- cakes
  - carrot cake
  - chocolate cake
  - vanilla cake
  - strawberry cake
- coffee
  - espresso
  - flat white
  - cappuccino
- smoothies
  - banana
  - strawberry
  - mango
  - pineapple
- sandwiches
  - cheese sandwich
  - tuna sandwich
  - ham sandwich

Products: name, price, category, description, and image.

User management
- login/logout
- register
- permissions, roles

Sale process. Need a cart, and items added to card.

Payment, payment process...

## Sprint #1

- Let's list categories and products.

```
GET /api/categories
```

```
GET /api/categories/:id
```

```
POST /api/categories
```

```
PUT /api/categories/:id
```

```
DELETE /api/categories/:id
```

```
{
  categories: [
    {id: 1, name: "Cakes"},
    {id: 2, name: "Coffee"},
  ]
}
```

Use knex and Objection.js to manage the database.

