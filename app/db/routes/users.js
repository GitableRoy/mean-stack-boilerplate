'use strict'
const express  = require('express');
const mongoose = require('mongoose');
var Users      = require('../models/Users');
var router     = express.Router();

router.get('/', function(req, res, next) {
  Users.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

router.post('/', function(req, res, next) {
  Users.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
