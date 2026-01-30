## Faker Package

Use to generate fake data

- userId
- username
- email
- password

### Install
> npm i @faker-js/faker

### Usage

```js
// ESM
import { faker } from '@faker-js/faker';

// CJS
const { faker } = require('@faker-js/faker');

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});
```

More Info: https://www.npmjs.com/package/@faker-js/faker?activeTab=readme