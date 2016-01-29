'use strict';

const index = require('express').Router();

/* GET home page. */
index.get('/', (req, res) => {
  res.render('index', { title: 'Api WebSchool' });
});

exports.index = index;
exports.users = require('./users');
exports.pokemons = require('./pokemons');
