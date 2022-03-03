/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor(model) {
        this.model = model;
        this.currentSpeed = 0;
    }
    accelerate() {
        this.currentSpeed++;
    }
    brake() {
        this.currentSpeed--;
    }
    toString() {
        return `Model: ${this.model}; current speed: ${this.currentSpeed}`
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
let fordCar = new Car('Ford');
fordCar.accelerate();
fordCar.accelerate();
fordCar.brake();
console.log(fordCar.toString());


/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
 class ElectricCar extends Car{
    accelerate() {
        this.currentSpeed++;
        this.currentSpeed++;
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
let elonCar = new ElectricCar('Tesla');
elonCar.accelerate();
elonCar.accelerate();
elonCar.brake();
console.log(elonCar.toString());