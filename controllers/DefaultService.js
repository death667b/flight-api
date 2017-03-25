'use strict';

exports.factPOST = function(args, res, next) {
  /**
   *
   * id Obj Post new fact
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "data" : args.id.value
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.setsnoozePOST = function(args, res, next) {
  /**
   *
   * id Obj Post snooze time
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "data" : args.id.value
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.suggestIdGET = function(args, res, next) {
  /**
   * Gets `suggest` string. 
   *
   * id String Suggested Location
   * returns String
   **/
  var examples = {};
  examples['application/json'] = {
    "test": "Londan"
  };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateaddressPOST = function(args, res, next) {
  /**
   *
   * id Obj Post new address
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "data" : args.id.value
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

