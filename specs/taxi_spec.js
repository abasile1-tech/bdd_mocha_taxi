const assert = require('assert');
const Taxi = require('../taxi.js');

describe('Taxi', function (){
	it('should have a manufacturer', function () {
		const taxi = new Taxi('Toyota', 'Prius'); // Arrange
		const actual = taxi.manufacturer; // Act
		assert.strictEqual(actual, 'Toyota'); // Assert
	});

	it('should have a model', function () {
		const taxi = new Taxi('Toyota', 'Prius');
		const actual = taxi.model;
		assert.strictEqual(actual, 'Prius');
	});
});