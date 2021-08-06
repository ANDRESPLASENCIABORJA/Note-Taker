// Require the router and the db file
const router = require('express').Router();
const store = require('../db/notesData');

// Second we have to link our routes to a series of "data" sources
// These data sources hold arrays os information on db,json.

const dataBase = require('../db/db.json');

console.log(dataBase.length);

// ROUTING
