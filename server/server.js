'use strict';

var path = require( 'path' );
var express = require( 'express' );
var bodyParser = require( 'body-parser' );

var app = express( );

app.set( 'port', process.env.PORT || 3002 );
// app.enable('strict routing');
app.use( bodyParser.urlencoded( {
  extended: false
} ) );
app.use( bodyParser.json( ) );

app.use( '/bower_components', express.static( path.join( __dirname, '../bower_components' ) ) );
app.use( '/node_modules', express.static( path.join( __dirname, '../node_modules' ) ) );
app.use( '/api/sim', require( './controllers/api/simulation.controller' ) );
app.use( express.static( path.join( __dirname, '../client' ) ) );

var renderIndex = function( req, res ) {
  res.sendFile( path.resolve( __dirname, '../client/index.html' ) );
};

app.get( '/*', renderIndex );

// Serve the website

var server = app.listen( app.get( 'port' ), function( ) {
  // var host = server.address().address;
  var host = '::';
  var port = server.address( ).port;

  if ( host === '::' ) {
    host = 'localhost';
  }

  console.log( 'Server listening at http://' + host + ':' + port );
} );


// Close server correctly

function exitHandler( options, err ) {
  server.close( );
  if ( err ) {
    console.log( err.stack );
  }
  console.log( 'Server closed.' );
  if ( options.exit ) {
    process.exit( );
  }
}

// process.on('exit', exitHandler.bind(null, {exit: true}));
process.on( 'SIGINT', exitHandler.bind( null, {
  exit: true
} ) );
process.on( 'uncaughtException', exitHandler.bind( null, {
  exit: true
} ) );