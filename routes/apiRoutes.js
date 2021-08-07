// Require the router and the db file
const save = require("../db/db.json");

// Require file system
const fs = require('fs');

// Require uuid to give each note a unique id
const { v4: uuidv4 } = require('uuid');


// ROUTING
module.exports = (app) => {
  // We are telling the route to read the db.json file and return what is stored there
  app.get("/api/notes", (req, res) => res.json(save));

  // Post route /api/notes should recieve a new note to save on the request body, add it to the db.json file and then return the new note to the client.
  app.post("/api/notes", (req, res) => {
    
    // Create a constant to recieve a new note and save it into the request body
    const newNote = req.body;

    // Unique id for the new note
    newNote.id = uuidv4();

    // Save the note into the json file
    save.push(newNote);

    // Return the note to the client
    res.json(newNote);
  });
};
