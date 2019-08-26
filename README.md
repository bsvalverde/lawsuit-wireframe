## Getting started

After downloading the project and navigating to its folder, it is necessary to run:

### `npm install`

After installation is complete, the project can be started by running:

### `npm start`

If the browser is not automatically started, the project can be found on [http://localhost:3000](http://localhost:3000).

## The project

The App will automatically retrieve the data from the backend API. If there is a communication error, refreshing the page will cause the App to retry the connection.

After the data is loaded, typing anything on the search input field will cause the cases to be filtered by title. Clicking on the arrows beside the title column header will reorder the cases alphabetically, in descending or ascending order as indicated by the arrow direction.

There is a limit to how many cases are shown. Clicking the `Load more` button at the end of the page will increase the limit, causing more cases to be shown at once.

Clicking the dark button at the end of each row will open a detailed page on that specific case.

In this page, clicking on the `View historics` button above the box, on the right, will open a modal showing the case's historics. The modal can be closed by clickin on the white X button above it.

To return to the main page, the `Go back` button on the upper right corner may be clicked.

## Internationalization

To change the language of the app, the `src/i18n.js` file may be edited. By changing line 10 from `lng: 'en',` to `lng: 'pt-br'` all the text will be shown in portuguese. Currently these are the only available languages.

## Tests

The test runner in interactive watch mode can be started by running:

### `npm test`
