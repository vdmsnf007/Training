'user strict';

var assert = require('assert');


Model = function (email) {
	assert.ok(email, 'Email is Required');

	var user = {};

	user.name = '';
	user.city = '';
	user.email = email;
	user.state = 'TX';

	return user;
}

module.exports = Model;
