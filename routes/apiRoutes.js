// Require file system to save the notes
const fs = require('fs');

// Require uuid to give each note a unique id
const { v4: uuidv4 } = require('uuid');


// ROUTING
module.exports = (app) => {
  // We are telling the route to read the db.json file and return what is stored there
  app.get("/api/notes", async (req, res) =>{
    let jsonData = await JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
    res.json(jsonData);
  });

  // Post route /api/notes should recieve a new note to save on the request body, add it to the db.json file and then return the new note to the client.
  app.post("/api/notes", async (req, res) => {
    
    // Create a constant to recieve a new note and save it into the request body
    const newNote = req.body;

    // Unique id for the new note
    newNote.id = uuidv4();

    // Save the note into the json file, first read it and then push the new data
    let newJson = await JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    //Add the note to the json file
    newJson.push(newNote);
    // Tell file system to write it 
    fs.writeFileSync('./db/db.json', JSON.stringify(newJson));

    // Send the new note to the client
    res.json(newNote);

  });
};
