const app = require('express').Router()
const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

// requiring the database file
let db = require('../db/db.json');

// get route for api notes
app.get('/api/notes', (req, res) => {
  db = JSON.parse(fs.readFileSync("./db/db.json","utf-8"))
  console.log("getRoute", db);
  res.json(db)
});

// post route for new api notes
app.post('/api/notes', (req, res) => {
  const newNote = {
    id: Math.floor(Math.random() * 50),
    title: req.body.title,
    text: req.body.text
  }
  db.push(newNote);
  
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
