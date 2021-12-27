const express = require('express');
const htmlRoutes = require('./Routes/htmlRoutes');
const apiRoutes = require('./Routes/apiRoutes');
// cont notes = require("/db/db.json");

const app = express();
const PORT = process.env.PORT || 3001; 


// Middleware
app.use(express.json());
// allows to create info
app.use(express.urlencoded({extended:true})); 
// link to public files
app.use(express.static('public'));



app.use('/api', apiRoutes);
app.use('/', htmlRoutes);








app.listen(PORT, () => {
    console.log("I am listening!", PORT);
})



