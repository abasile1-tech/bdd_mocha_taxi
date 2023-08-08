const assert = require('assert');
const Taxi = require('../taxi.js');

describe('Taxi', function (){
	let taxi;

	beforeEach(function () {
		taxi = new Taxi('Toyota', 'Prius');
	});

	it('should have a manufacturer', function () {
		const actual = taxi.manufacturer; 
		assert.strictEqual(actual, 'Toyota'); 
	});

	it('should have a model', function () {
		const actual = taxi.model;
		assert.strictEqual(actual, 'Prius');
	});
});