const app = require('express').Router()
const fs = require('fs');
const path = require('path'); 

const db = require('../db/db.json');
// get route for api notes
app.get('/api/notes', (req, res) => {
  db = JSON.parse(fs.readFile("./db/db.json")) || []
  console.log("getRoute", db);
  res.json(db)
    // res.sendFile(path.join(__dirname, '/../db/db.json'))
});
   
// post route for api notes
app.post('/api/notes', (req, res) => {

    fs.readFile(path.join(__dirname,'/../db/db.json'), 'utf8', (err, data) => {
      if (err) throw err;

      // this puts the data from db.json into a variable
      // var notesArray = [data];
      // console.log(data);

      // this creates a variable for the new note
      const notesString = JSON.stringify(req.body);
      // console.log(notesString);

      // this pushes the new note to notesArray
        if (notesString == String) {
          let noteArray = data.push(notesString);
          console.log(noteArray);
       
      // writing the new file 
      fs.writeFile(path.join(__dirname, '/../db/db.json' ), JSON.stringify(noteArray, null, '\t'), (err) => {
        if (err) console.log(err); 
        else {
        console.log(`Your note entitled "${req.body.title}" has been saved to database!`);
      }
    }
  )
}
})

});



// delete notes 
// app.delete('/api/notes', (req, res) => {
//     res.body
// })

module.exports = app;
