'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.factPOST = function factPOST (req, res, next) {
  Default.factPOST(req.swagger.params, res, next);
};

module.exports.setsnoozePOST = function setsnoozePOST (req, res, next) {
  Default.setsnoozePOST(req.swagger.params, res, next);
};

module.exports.suggestIdGET = function suggestIdGET (req, res, next) {
  Default.suggestIdGET(req.swagger.params, res, next);
};

module.exports.updateaddressPOST = function updateaddressPOST (req, res, next) {
  Default.updateaddressPOST(req.swagger.params, res, next);
};
