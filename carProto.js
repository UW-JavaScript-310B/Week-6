/**
 * Car class
 * @constructor
 * @param {String} model
 */

class Car {
    constructor (model) {
        this.currentSpeed = 0;
        this.model = model;
    }
    accelerate() {
        this.currentSpeed ++; 
    } 
    brake() {
        this.currentSpeed--; 
    }
    toString() {
        console.log(`My ${this.model} is going ${this.currentSpeed} fast!`)
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const tacoma = new Car ('Tacoma');

tacoma.accelerate();
tacoma.accelerate();
tacoma.brake();
tacoma.toString();

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

class ElecticCar extends Car {
    constructor (model) {
        super(model); 
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const taurus = new ElecticCar ('Taurus');

taurus.accelerate();
taurus.accelerate();
taurus.brake();
taurus.toString();