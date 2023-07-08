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



 mongoose.connect('mongodb+srv://marius3837:123Qwe12r+@cluster0.afi4oij.mongodb.net/?retryWrites=true&w=majority')
    .then(() =>{
      console.log('connected to MMongoDB');
      app.listen(3000, () => {
      console.log('node is running on port 3000');
      });
    }).catch((error) => {
      console.log(error);
    });

 
