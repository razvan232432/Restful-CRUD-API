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
 app.listen(3000, () => {
   console.log('node is running on port 3000');
 });
