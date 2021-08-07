// This constant requires all the express functionalities
const router = require('express').Router();
// This constant uses the constant express that has inside it all the express functionalities
const path = require('path');

// ROUTING FOR THE PATHS BETWEEN THE HTML DOCS

//Route for the index.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

// Route for the contact form html
router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

// Export this routes so they can be used on the html file
module.exports = router;

