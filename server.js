const express = require('express'); 
const path = require('path'); 
const PORT = 3001; 

const app = express(); 

app.use(express.static('public')); 

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