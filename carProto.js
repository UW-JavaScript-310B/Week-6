/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class Car {
    constructor(model) {
        this.currentSpeed = 0;
        this.model = model;
    }

    accelerate() {
        this.currentSpeed++
    } 
    decellerate() {
        this.currentSpeed--
    }
    toString() {
        console.log(`My ${this.model} is going ${this.currentSpeed} fast!`)
    }
}

const cherokee = new Car('Cherokee');
const mustang = new Car('Mustang');

cherokee.accelerate();
cherokee.accelerate();
cherokee.decellerate();
cherokee.toString();

mustang.accelerate();
mustang.accelerate();
mustang.decellerate();
mustang.toString();

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class ElectricCar extends Car {
    constructor(model, motor) {
        super(model, motor);
        this.motor = 'electric';
        this.accelerate();
        this.accelerate();
    }
    toString() {
        console.log(`My ${this.motor} ${this.model} is going ${this.currentSpeed} fast!`)
    }
}

const machE = new ElectricCar('Mach-E'); 
console.log(machE.toString());
