// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var loopback = require('../');
var app;
var assert = require('assert');
var request = require('supertest');

describe('loopback.errorHandler(options)', function() {
  it('should pass strong-error-handler message to migrate', function(done) {
    try {
  //arrange
      var app = loopback();
      app.use(loopback.urlNotFound());
      app.use(loopback.errorHandler({ log: false }));
    } catch (e) {
      done();
    }
  });

  it('should pass strong-error-handler message to migrate', function(done) {
    try {
  //arrange
      var app = loopback();
      app.use(loopback.urlNotFound());
      app.use(loopback.errorHandler({ debug: false, log: false }));
    } catch (e) {
      done();
    }
  });

  it('should pass strong-error-handler message to migrate', function(done) {
    try {
  //arrange
      var app = loopback();
      app.use(loopback.urlNotFound());

      var errorLogged;
      app.use(loopback.errorHandler({
        debug: false,
        log: function customLogger(err, str, req) {
          errorLogged = err;
        },
      }));
    } catch (e) {
      done();
    }
  });
});
