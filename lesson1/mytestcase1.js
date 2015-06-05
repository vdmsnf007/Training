/* jshint -W097 */

'use strict';

var should = require('chai').should();
var assert = require('assert');
var User = require('./model.js');

describe('Describe User Object', function(){
  var user = new User('test@mail.com');

  describe('Required arguments', function(){

   function CreateNewUser(){
    return new User();
   }

   it('Arguements as null results in error', function(){
    assert.throws(CreateNewUser, Error, '');
   });
  });

 describe('Default Values are set properly', function(){
  it('Name should be empty when new user', function(){
   user.name.should.be.empty;
  });
  it('City should have a default of Irving', function(){
   user.city.should.be.equal('Irving');
  });
 });

 describe('Setting Data Values', function(){
  it('Should let me set the name to be Daniel', function(){
   user.name = 'Daniel';
   user.name.should.be.equal('Daniel');
  });
 });
});


