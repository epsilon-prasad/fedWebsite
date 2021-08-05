'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _blog = require('../controllers/blog/blog.controller');

var _helplink = require('../controllers/blog/helplink.controller');

var blogRoutes = (0, _express.Router)();

//Open API's  
blogRoutes.get('/get-blog/:_id', _blog.getBlog);
blogRoutes.get('/get-helplink/:_limit', _helplink.getHelplink);

exports.default = blogRoutes;