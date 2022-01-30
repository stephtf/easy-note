const app = require('express').Router()
const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

let db = require('../db/db.json');
// get route for api notes
app.get('/api/notes', (req, res) => {
  db = JSON.parse(fs.readFileSync("./db/db.json","utf-8"))
  //db = JSON.parse(fs.readFile("./db/db.json")) || [];
  console.log("getRoute", db);
  res.json(db)
  // res.sendFile(path.join(__dirname, '/../db/db.json'))
});

// post route for api notes
app.post('/api/notes', (req, res) => {
  const newNote = {
    id: Math.floor(Math.random() * 50),
    title: req.body.title,
    text: req.body.text
  }
  db.push(newNote);
  // fs.readFile(path.join(__dirname,'/../db/db.json'), 'utf8', (err, data) => {
  //   if (err) throw err;

  // this puts the data from db.json into a variable
  // var notesArray = [data];
  // console.log(data);

  // this creates a variable for the new note
  // const notesString = JSON.stringify(req.body);
  // // console.log(notesString);

  // // this pushes the new note to notesArray
  //   if (notesString == String) {
  //     let noteArray = data.push(notesString);
  //     console.log(noteArray);

  // writing the new file 
  fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
      if (err) console.log(err);
      else {
        console.log(`Your note entitled "${req.body.title}" has been saved to database!`);
      }
  })
  console.log("post",db)
  res.json(db)
})



// delete notes 
app.delete('/api/notes/:id', (req, res) => {
  let tempDb = []
  for (let i=0; i<db.length; i++) {
    if(db[i].id != req.params.id){
      tempDb.push(db[i])
    }
  }
  db = tempDb;

  fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
    if (err) console.log(err);
    else {
      console.log(`Your note entitled "${req.body.title}" has been saved to database!`);
    }
})
console.log("delete",db)
res.json(db);
})

module.exports = app;
