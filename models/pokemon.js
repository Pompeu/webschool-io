// file: models/pokemon.js - created at 2015-12-06, 07:18
'use strict';

function pokemonHandler() {

	const mongoose = require('mongoose');
	let Schema = require('mongoose').Schema;
	const ObjectId = Schema.ObjectId;         

	const schema = new Schema({
		id          : ObjectId,
		name        : {type : String, trin : true},
		type        : {type : String, trin : true},
		attack      : {type : Number},
		defence     : {type : Number},
		height      : {type : Number},
		description : {type : String, trin : true}
	});

	return mongoose.model('Pokemon', schema);
}
module.exports = exports = pokemonHandler();
