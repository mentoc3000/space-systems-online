'use strict';

var Q = require( 'q' );
var Promise = Q.Promise;
var gmat = require( '../lib/gmat' );

var service = {};

service.runScript = runScript;

module.exports = service;

function runScript( input ) {

  return Promise.resolve( gmat.runSim( input ) );
  // return 'works!';

}
