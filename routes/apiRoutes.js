  
// First we need to require uniqid to give an unique id to every note that the user write
const uniqid = require('uniqid');

// Second we have to link our routes to a series of "data" sources
// These data sources hold arrays os information on db,json.

const dataBase = require('../db/db.json');

console.log(dataBase.length);

// ROUTING
module.exports = (app) => {
    // API GET Requests
    // Below code handles when users visit a page
    // In each of the below cases when a user visits a link
    // They are shown a JSON of the data on the notes side of the screen

    // GET /api/notes should read the db.json file and return all saved notes as JSON.
    app.get('/api/notes', (req, res) => res.json(dataBase));

    // API POST Request
    // POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

    app.post('api/notes', (req, res) => {
        if (dataBase.length >= 1) {
            dataBase.push(req.body);
            res.json(true);
            return req.body;
        }
    });

}