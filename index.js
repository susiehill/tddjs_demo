'use strict'
var assert = require("assert");
var a = 3;
var b = 3;
var c = 4;
var d = 8;
var productAB = a * b;
var doTheMath = (b-c)*d;

describe('Math', function() {
	it('should test if a * b = 9', function() {
		assert.equal(9,productAB);
	});
	it('should test if (b-c)*d = -8', function() {
		assert.equal(-8,doTheMath);
	});
});