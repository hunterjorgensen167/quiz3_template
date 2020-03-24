const express = require('express');
const pokemon = require('./pokemon.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/pokemon', pokemon);

app.listen(3000, function() {
    console.log('Starting server');
});