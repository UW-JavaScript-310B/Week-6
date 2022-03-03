/**
 * Car class
 * @constructor
 * @param {String} model
 */

class Car {
  constructor(model) {
    this.model = model;
    this.currentSpeed = 0;
    this.motor = 'Gas';
  }

  accelerate() {
    this.currentSpeed++;
  }

  brake() {
    this.currentSpeed--;
  }

  toString() {
    console.log(`My ${this.model} is going ${this.currentSpeed} fast!`);
  }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
let car1 = new Car('Mustang');
car1.accelerate();
car1.accelerate();
car1.brake();
car1.toString();

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car {
  constructor(model) {
    super(model);
    this.motor = 'Electric';
  }

  accelerate() {
    super.accelerate();
    super.accelerate();
  }

  toString() {
    console.log(`My brand new ${this.model} is ${this.motor.toLowerCase()} and is going ${this.currentSpeed} fast!`);
  }
}

let car2 = new ElectricCar('Tesla');
car2.accelerate();
car2.accelerate();
car2.brake();
car2.toString();
