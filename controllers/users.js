// file: controllers/users.js - created at 2015-12-06, 03:44
'use strict';
const model = require('../models/index');

function usersHandler () {

  const resources = {
    get    : get,
    getOne : getOne,
    put    : put,
    post   : post,
    del    : del
  };

  return resources;

  function get (req, res) {
    model.User.find({})
    .then(user => {
      res.json(user);
    }, error => {
      res.status(400).json({data : error});
    });
  }

  function getOne (req, res) {
    model.User.findOne({ _id : req.params.id})
    .then(user => {
      res.json(user);
    }, error => {
      res.status(400).json({data : error});
    });
  }

  function put (req, res){
    const promise = model.User.update({_id : req.params.id}, req.body).exec();
    promise.then(success => {
      res.status(202).json({data : success});
    }, error => {
      res.status(400).json({data : error});
    });
  }

  function post (req, res){
    model.User.create(req.body)
    .then(user => {
      res.status(201).json(user);
    }, error => {
      res.status(400).json({data : error});
    });
  }

  function del (req, res){
    model.User.remove({_id : req.params.id})
    .then(() => {
      res.status(204).end();
    }, error => {
      res.status(400).json({data : error});
    });
  }
}
module.exports = exports = usersHandler();
