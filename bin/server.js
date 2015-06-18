#!/usr/bin/env node

var port = process.env.port || 8000;
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/../dist')).listen(port);
console.log('Listening on port ' + port);
