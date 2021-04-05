# Search Codementor

A simple search for articles from Codementor community. Powered by Algolia.

[![Netlify Status](https://api.netlify.com/api/v1/badges/0d42e5fe-1a39-44da-8f77-eac714fc3294/deploy-status)](https://app.netlify.com/sites/algolia-search-exerise/deploys)

## Project Setup

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

_Remember to add development environment variables in `.env.local`_

```
REACT_APP_ALGOLIA_APLICATION_ID = <ALGOLIA_APLICATION_ID>
REACT_APP_ALGOLIA_APLICATION_KEY = <ALGOLIA_APLICATION_KEY>
REACT_APP_ALGOLIA_INDEX_NAME = <ALGOLIA_INDEX_NAME>
```

### `npm test`

Launches the test runner in the interactive watch mode.<br />
Tests including unit tests for components.

_Remember to add development environment variables in .env.test.local_

```
REACT_APP_ALGOLIA_APLICATION_ID = <ALGOLIA_APLICATION_ID>
REACT_APP_ALGOLIA_APLICATION_KEY = <ALGOLIA_APLICATION_KEY>
REACT_APP_ALGOLIA_INDEX_NAME = <ALGOLIA_INDEX_NAME>
```

Runs `npm test -- --coverage` for the coverage report.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

After running it, runs `serve -s build` to serve it with a static server.

The working app is running under [https://search-codementor.netlify.app](https://search-codementor.netlify.app)

## Features

- A tabs component allowing the user to switch between the **Search** and **Favorite** page with route changes.
- It should provide text input to enter a keyword.
- After entering the keyword, it should list the matched posts. The post row should contain at least the **title**, **author name**, **categories**, and **saved state**.
- Display **No result** if no result found from Algolia
- The **Save/Unasve** button should display when hovering on the post. User can click to **save/unsave** both on the **Search** and **Favorite** page.

## Tech Stack

- create-react-app (CRA)
- React Hook
- Redux
- Styled Component
- Algolia
- React-testing-library

## Folder Structure

```
src/
├── app/
│   └── store.js
├── components/
│   ├── ArticleList/
│   ├── Button/
│   ├── InputSearch/
│   ├── ListItem/
│   ├── NavBar/
│   └── Tag/
├── containers/
│   ├── favorite/
│   └── search/
├── utils/
│   └── algolia.js
├── app.js
└── index.js
```
