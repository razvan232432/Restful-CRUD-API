const express = require('express');
const app = express();

// routes

app.get('/',(req, res) => {
    res.send('Hello');
;})

app.listen(3000, () => {
    console.log('node os running on  port  3000');
});

