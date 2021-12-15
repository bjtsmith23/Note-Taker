const express = require('express');
const htmlRoutes = require('./Routes/htmlRoutes');

// const fs = require('fs');
// const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001; 

app.use(express.json());

app.use(express.urlencoded({
    extended:true
})); 

// link to public files
app.use(express.static('public'))
app.use(htmlRoutes);







app.listen(PORT, () => {
    console.log("I am listening!", PORT);
})



