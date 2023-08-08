const assert = require('assert');
const Taxi = require('../taxi.js');

describe('Taxi', function (){
	let taxi;

	beforeEach(function () {
		taxi = new Taxi('Toyota', 'Prius', 'Ned');
	});

	it('should have a manufacturer', function () {
		const actual = taxi.manufacturer; 
		assert.strictEqual(actual, 'Toyota'); 
	});

	it('should have a model', function () {
		const actual = taxi.model;
		assert.strictEqual(actual, 'Prius');
	});

	it('should have a driver', function () {
		const actual = taxi.driver;
		assert.strictEqual(actual, 'Ned');
	})

	describe('passengers', function () {
		it('should start with no passengers', function () {
			const actual = taxi.passengers;
			assert.deepStrictEqual(actual, []);
		});

		it('should tell me how many passengers there are', function () {
			const actual = taxi.numberOfPassengers();
			assert.deepStrictEqual(actual, 0);
		});

		it('should add a passenger', function () {
			taxi.addPassenger('Steven');
			const actual = taxi.passengers;
			assert.deepStrictEqual(actual, ['Steven']);
		});

		it('should remove a passenger by name', function () {
			taxi.addPassenger('Steven');
			taxi.addPassenger('Glen');
			taxi.removePassengerByName('Steven')
			const actual = taxi.passengers;
			assert.deepStrictEqual(actual, ['Glen']);
		});

		it('should remove all passengers', function() {
			taxi.addPassenger('Steven');
			taxi.addPassenger('Glen');
			taxi.removeAllPassengers();
			const actual = taxi.passengers;
			assert.deepStrictEqual(actual, []);
		})
		
	});
});