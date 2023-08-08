const { prototype } = require("events");

const Taxi = function (manufacturer, model, driver) {
	this.manufacturer = manufacturer;
	this.model = model;
	this.driver = driver;
	this.passengers = [];
}

Taxi.prototype.numberOfPassengers = function () {
	return this.passengers.length;
}

module.exports = Taxi;