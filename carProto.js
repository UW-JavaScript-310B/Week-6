/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
  constructor(model) {
    this.model = model;
    this.speed = 0;
    this.accelerate = function () {
      this.speed++;
    };
    this.brake = function () {
      if (this.speed > 0) {
        this.speed--;
      }
    };
  }
  toString() {
    console.log(`${this.model} is currently going ${this.speed} mph.`);
  }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car {
  constructor(model) {
    super(model);
  }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const civic = new Car("Honda Civic");
civic.accelerate();
civic.accelerate();
civic.brake();
civic.toString();

const tesla = new ElectricCar("Tesla Roadster");
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.toString();
