const express = require('express'); 
const fs = require('fs');


const app = express(); 



// get route for api notes
app.get('/api/notes', (req, res) => {
    res.json(data);
});


// post route for api notes
app.post('/api/notes', (req, res) => {
    res.body(note);
});

// delete notes 
app.delete('/api/notes', (req, res) => {
    // what goes here?? 
})