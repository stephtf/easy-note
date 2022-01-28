const express = require('express'); 
const fs = require('fs');
const path = require('path'); 
const app = express(); 

const newNotes = {

}


// get route for api notes
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/../db/db.json'))
});
   
// post route for api notes
app.post('/api/notes', (req, res) => {

    fs.readFile(path.join(__dirname,'/../db/db.json'), 'utf8', (err, data) => {
      if (err) throw err;

      // this puts the data from db.json into a variable
      var notesArray = [data];

      // this creates a variable for the new note
      const notesString = (req.body);

      // this pushes the new note to notesArray
      notesArray.push(notesString);
      // console.log(notesArray); 

      // writing the new file 
      fs.writeFile(path.join(__dirname, '/../db/db.json' ), JSON.stringify(notesArray), (err) => {
        if (err) console.log(err); 
        else {
        console.log(`Your note entitled "${req.body.title}" has been saved to database!`);
      }
    }
  )
    
})

});



// delete notes 
// app.delete('/api/notes', (req, res) => {
//     res.body
// })

module.exports = app;
