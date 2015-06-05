'user strict';

var assert = require('assert');

var Model=function(email){
	assert.ok(email, 'Email is Required');

	var user={};
	user.name='';
	user.city='Irving';
	user.email=email;

	return user;
};

module.exports=Model;
