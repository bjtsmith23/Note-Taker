const express = require('express');
const htmlRoutes = require('./Routes/htmlRoutes');
const apiRoutes = require('./Routes/apiRoutes');

const app = express();

const PORT = process.env.PORT || 3001; 

app.use(express.json());

// allows to create info
app.use(express.urlencoded({extended:true})); 

// link to public files
app.use(express.static('public'));




app.use('/', htmlRoutes);
app.use('/api', apiRoutes);







app.listen(PORT, () => {
    console.log("I am listening!", PORT);
})



