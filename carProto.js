/**
 * Car class
 * @constructor
 * @param {String} model
 */

class Car {
  constructor(model) {
    this.currentSpeed = 0;
    this.model = model;
  }
  accelerate() {
    this.currentSpeed++;
  }
  brake() {
    this.currentSpeed--;
  }
  toString() {
    return `${this.model} is currently at speed of ${this.currentSpeed}!`;
  }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const taurus = new Car('Taurus');
taurus.accelerate();
taurus.accelerate();
taurus.brake();
console.log(taurus.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
 class ElectricCar extends Car {
  constructor(model) {
    super(model);
    this.motor = 'electric';
  }
  accelerate() {
    super.accelerate();
    super.accelerate();
  }
  toString() {
    return `${this.motor} ${super.toString()}`
  }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const tesla = new ElectricCar('Tesla');
tesla.accelerate();
tesla.accelerate();
tesla.brake();
console.log(tesla.toString());