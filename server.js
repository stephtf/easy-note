// these are required
const express = require('express'); 
const path = require('path'); 
const api = require('./routes/api.js');

const PORT = 3001; 

const app = express(); 

// connecting to the public folder
app.use(express.static('public')); 

// Middleware for parsing JSON and urlencoded form data (see Unit 11 Activity 28)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// get route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/index.html'));
});

// get route for the notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/notes.html'));
});

app.listen(PORT, () => {
    console.log(`listening closely at http://localhost:${PORT}`); 
});













