const express = require('express');
const mongoose = require('mongoose');
const app = express();

// routes

app.get('/',(req, res) => {
    res.send('Hello');
;})

app.get('/blog',(req, res) => {
    res.send('Hello  blog');
;})



// set   default  mongoose connection

mongoose.connect('mongodb://localhost:27017');
app.listen(3000, () => {
    console.log('node is running on port 3000')
})
.then(() => {
    console.log('connected to MongoDB');
}).catch((error) => {
    console.log(error);
});