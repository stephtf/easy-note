const express = require('express'); 
const fs = require('fs');
const path = require('path'); 
const app = express(); 

// const notesData = require('./db/db.json');

// get route for api notes
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/../db/db.json'))
});
   
// post route for api notes
app.post('/api/notes', (req, res) => {
    console.log(req.body); 

    const notesString = JSON.stringify(req.body);

    fs.appendFile(path.join(__dirname, '/../db/db.json'), notesString, (err) =>
    err
      ? console.error(err)
      : console.log(
          `Your note entitled "${req.body.title}" has been saved to database!`
    )
  );
});
    


// delete notes 
// app.delete('/api/notes', (req, res) => {
//     res.body
// })

module.exports = app;