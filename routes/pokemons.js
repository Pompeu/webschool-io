'use strict';

const router  = require('express').Router();
const ctrl    = require('../controllers/pokemons');

router
.get('/',ctrl.get)
.post('/',ctrl.post)
.put('/:id',ctrl.put)
.get('/:id',ctrl.getOne)
.delete('/:id',ctrl.del);

module.exports = router;
