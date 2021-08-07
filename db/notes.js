// Import uuuid and add it to the object
const { v4: uuidv4 } = require('uuid');


// Create an array to store the users inputs and gige them a unique id
const notesArray = [
    {
        title: 'Test title',
        text: 'Test text',
        noteId: uuidv4()
    }
  ];


  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = notesArray;