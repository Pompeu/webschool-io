'use strict';

function userHandler() {
  const mongoose = require('mongoose');
  let Schema = require('mongoose').Schema;
  const ObjectId = Schema.ObjectId;

  const schema = new Schema({
    id       : ObjectId,
    name     : {type     : String, required : true, trin : true},
    sname    : {type     : String, required : true, trin : true},
    email    : {type     : String, required : true, trin : true , unique : true },
    password : {type     : String, required : true, trin : true}
  });

    return mongoose.model('User', schema);
}
module.exports = exports = userHandler();
