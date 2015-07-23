'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('react-baseplate:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({
        packageName: 'test-component',
        displayName: 'TestComponent',
        componentFileName: 'test-component'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'examples/test-component.jsx',
      'src/test-component.jsx',
      'test/client/lib/app.js',
      'test/client/test.spec.js',
      'Gruntfile.js',
      'package.json',
      'README.md'
    ]);
  });
});
