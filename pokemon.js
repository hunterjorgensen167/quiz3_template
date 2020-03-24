const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');

const pokemonTeam = [];

router.get('/', (req, res) => res.status(200).send({message:"hello, world!"}));

module.exports = router;