// required connections 
const express = require('express'); 
const api = require('./routes/api.js');

const PORT = process.env.PORT || 3001;

const app = express(); 



// Middleware for parsing JSON and urlencoded form data (see Unit 11 Activity 28)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connecting to the public folder
app.use(express.static('public')); 
app.use(api);
app.use(require("./routes/html"));




app.listen(PORT, () => {
    console.log(`listening closely at http://localhost:${PORT}`); 
});