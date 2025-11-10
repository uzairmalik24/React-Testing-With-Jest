# React Testing with Jest

This project demonstrates testing React components using **Jest**, **React Testing Library**, and **MSW v1** (Mock Service Worker) for API mocking.

---

## Libraries Used

1. **Jest** – JavaScript testing framework to run and organize tests.  
2. **React Testing Library (RTL)** – Utilities to test React components in a way that resembles how users interact with them.  
3. **Jest DOM** – Custom Jest matchers for testing DOM elements (`toHaveLength`, `toBeInTheDocument`, etc.).  
4. **Babel** – Transpiles modern JavaScript/JSX for Jest to understand.  
5. **MSW v1** – Mock API responses in tests, intercepts HTTP requests.  
6. **WhatWG Fetch** – Polyfills `fetch` in Jest’s Node environment.  

---

## File Naming Convention

- Test files should follow the pattern:  
  - `ComponentName.test.js` / `ComponentName.spec.js`  
- You can also create a dedicated folder: `src/__tests__` for all your tests.  
- Keeping tests alongside components is fine for smaller projects.

---

## Project Setup Steps

1. Create `jest.config.js` to configure Jest.  
2. Create `babel.config.js` to enable JSX and ES6+ support.  
3. Create `setupTests.js` in `src` to initialize `jest-dom`, polyfill `fetch`, and start MSW.  

Example `setupTests.js`:

import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { beforeAll, afterEach, afterAll } from '@jest/globals';
import { server } from './mocks/server.js'; // MSW v1 server

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
Describe Blocks
describe() is used to group related tests, e.g., UI tests, API tests, Business logic tests.

describe.skip – skips the group

describe.only – runs only this group

Event Testing
fireEvent
Used to simulate DOM events:


fireEvent.click(button); // simulate click
fireEvent.change(input, { target: { value: 'new value' } }); // simulate input change
userEvent
Higher-level library for simulating real user interactions (clicks, typing, etc.).

Query Methods in RTL
getBy – Synchronous query, throws if element is not found.

findBy – Asynchronous query, waits for element to appear (use with async/await).

queryBy – Synchronous query, returns null if element is not found.

Jest Hooks
beforeAll – Run once before all tests.

beforeEach – Run before each test.

afterAll – Run once after all tests.

afterEach – Run after each test.

Snapshot Testing
Used to ensure UI does not change unexpectedly:

Captures rendered structure of a component

Stored in .snap files

Mostly used for stable or ready components

RTL Configuration
configure() in RTL allows customization of queries, like overriding data-testid for consistent testing.

Jest act Function
Wraps code that triggers state updates to ensure all effects are applied before assertions. Useful when testing async updates.

Mock Service Worker (MSW v1)
MSW v1 allows mocking backend APIs in tests without hitting a real server:

Define handlers for endpoints (rest.get, rest.post)

Start the server in setupTests.js

Reset handlers after each test

Example handler (handlers.js):


import { rest } from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
        { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false },
        { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },
      ])
    );
  }),
];
Working Test Example


import React from 'react';
import { render, screen } from '@testing-library/react';
import MockApiTest from './mockApiTest';

test('Mock API Test', async () => {
  render(<MockApiTest />);
  
  // Each todo is rendered as a single <li>
  const listItems = await screen.findAllByRole('listitem');
  
  expect(listItems).toHaveLength(3); // matches number of todos
});
Testing Playground Chrome Extension
Useful for generating queries based on your DOM structure.

Helps quickly identify data-testid, roles, and text for RTL queries.

yaml


---

If you want, Uzair, I can also **rewrite your `MockApiTest.jsx` component** so it matches this README and passes the test exactly with **one `<li>` per todo**, making the test cleaner.  

Do you want me to do that next?






You said:
no, you are not giving  full good readme



ChatGPT said:
Got it, Uzair 😎 — let’s make a fully polished, copy-paste-ready, complete README that’s structured, accurate, and explains all the libraries and MSW v1 usage. I’ll also include proper sections for setup, testing, examples, and best practices.

Here’s the full version:

markdown

# React Testing with Jest and MSW v1

This project demonstrates testing React components using **Jest**, **React Testing Library**, and **MSW v1 (Mock Service Worker)** for API mocking in a modern React setup.

---

## Libraries Used

1. **Jest** – JavaScript testing framework to run and organize tests.
2. **React Testing Library (RTL)** – Utilities to test React components as a user would interact with them.
3. **Jest DOM** – Provides custom Jest matchers for testing DOM elements (`toHaveLength`, `toBeInTheDocument`, etc.).
4. **Babel** – Transpiles modern JavaScript/JSX to be understood by Jest.
5. **MSW v1** – Intercepts network requests and returns mocked responses for tests.
6. **WhatWG Fetch** – Polyfills `fetch` in Jest’s Node environment to support API calls in tests.
7. **User Event** – Library for simulating real user interactions (clicking, typing, etc.).

---

## File Naming Conventions

- Test files should follow the pattern:  
  - `ComponentName.test.js` / `ComponentName.spec.js`
- For organization, you can create a folder: `src/__tests__/`.
- Keeping tests alongside components is also acceptable in smaller projects.

---

## Project Setup Steps

1. **Create `jest.config.js`**  

export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
};
Create babel.config.js



export default {
  presets: ["@babel/preset-env", "@babel/preset-react"]
};
Create setupTests.js



import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { beforeAll, afterEach, afterAll } from '@jest/globals';
import { server } from './mocks/server.js'; // MSW server

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
Jest Hooks
beforeAll – Run once before all tests.

beforeEach – Run before each test.

afterAll – Run once after all tests.

afterEach – Run after each test.

Useful for initializing test environments, resetting state, or cleaning up after tests.

Describe Blocks
describe() is used to group related tests:


describe('UI Tests', () => {
  test('renders component correctly', () => {});
});
describe.only – runs only this group.

describe.skip – skips this group.

Event Testing
fireEvent
Simulate DOM events:


fireEvent.click(button);
fireEvent.change(input, { target: { value: 'new value' } });
userEvent
Simulates real user interactions with better accuracy than fireEvent.

Query Methods in RTL
getBy – Synchronous, throws error if element not found.

queryBy – Synchronous, returns null if element not found.

findBy – Asynchronous, waits for element to appear (use with async/await).

Snapshot Testing
Ensures UI doesn’t change unexpectedly.

Captures rendered structure of a component.

Stored in .snap files.

Mostly used for stable components or keeping a visual record of UI.

Jest act Function
Wraps code that triggers state updates.

Ensures all effects are flushed before assertions.

Especially useful when testing async updates.

Mock Service Worker (MSW v1)
MSW v1 intercepts network requests in tests:

Define handlers for endpoints (rest.get, rest.post, etc.).

Start the server in setupTests.js.

Reset handlers after each test to maintain test isolation.

Example handler (handlers.js):


import { rest } from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
        { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false },
        { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },
      ])
    );
  }),
];
Example Component Test

import React from 'react';
import { render, screen } from '@testing-library/react';
import MockApiTest from './mockApiTest';

test('Mock API Test', async () => {
  render(<MockApiTest />);
  
  const listItems = await screen.findAllByRole('listitem'); // async findBy
  expect(listItems).toHaveLength(3); // 3 todos rendered
});
Testing Playground Chrome Extension
Helps generate queries for RTL.

Quickly find data-testid, roles, or text content for testing.

Best Practices
Keep test data small for faster and reliable tests.

Always reset MSW handlers between tests.

Use findBy/findAllBy for async elements.

Prefer userEvent over fireEvent for more realistic testing.

Group related tests with describe() blocks.

