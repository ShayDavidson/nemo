/* global module: true, require: true, console: true */
'use strict';

var assert = require('assert'),
  path = require('path'),
  nemo,
  Nemo = require('../index');


describe('@override@', function () {

  it("@fromEnv@ over config.json data", function (done) {
    process.env.nemoBaseDir = path.resolve(__dirname);
    process.env.data = JSON.stringify({
      baseUrl: 'http://www.ebay.com'
    });
    console.log('process.env.data', process.env.data);
    nemo = Nemo(function (err) {
      if (err) {
        return done(err);
      }
      assert.equal(nemo.data.baseUrl, 'http://www.ebay.com');
      nemo.driver.quit();
      done();
    });
  });
  it("@fromArg@ over config.json data", function (done) {
    process.env.nemoBaseDir = path.resolve(__dirname);

    nemo = Nemo({
      data: {
        baseUrl: 'http://www.ebay.com'
      }
    }, function (err) {
      if (err) {
        return done(err);
      }
      assert.equal(nemo.data.baseUrl, 'http://www.ebay.com');
      nemo.driver.quit();
      done();
    });
  });
});



