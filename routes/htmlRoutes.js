// We need to include the path package to get the correct file path for our html files

const path = require('path');

// ROUTING FOR THE PATHS BETWEEN THE HTML DOCS

module.exports = (app) => {
    // => HTML GET REQUESTS
    // Below code handles when users visit a page.
    // In each of the below cases the user is shown an html page of content

    // GET /notes should return the notes.html file.
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // GET * should return the index.html file.
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};

