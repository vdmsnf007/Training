/* jshint -W097 */

'user strict';

var should = require('chai').should();
var assert = require('assert');
var oUser = require('./model.js');

describe('Set up proper user object', function () {
 var user = new oUser('email');

 describe('Required arguments', function () {
  function CreateNewUser() {
   return new oUser();
  };

  it('ER1 - missing required arguments', function () {
   assert.throws(CreateNewUser, Error, '');
  });
 });

 describe('Default values are set properly', function () {
  it('User name and city should be empty when new user', function () {
   user.name.should.be.empty;
   user.city.should.be.empty;
  });

  it('State should be set to TX by default', function () {
   user.state.should.be.equal('TX');
  });
 });

});
