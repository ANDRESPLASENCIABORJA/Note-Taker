// DEPENDENCIES
// First we have to get a series of npm packages that we will use to give our server useful functionality

// Require express to handle the routing
const express = require("express");
// Require apiRoutes file to handle the js routes
const apiRoutes = require("./routes/apiRoutes");
// Require htmlRoutes file to handle html routes
const htmlRoutes = require("./routes/htmlRoutes");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 5000;

// Sets up the express const app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
