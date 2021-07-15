// DEPENDENCIES
// First we have to get a series of npm packages that we will use to give our server useful functionality

const express = require('express');

// Tell node that we are creating an express server
const app = express();

// Sets up an initiall port. We will use this later in our listener
const PORT = 8080;

// Sets up the express const app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The next points our server to a series of "route files".
// This routes give our server a 'map' of how to respond when users visit or request data from various urls.

require('../../../routes/htmlRoutes.js')(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});