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
    brake() {
        this.currentSpeed--
    }
    toString() {
        console.log(`${this.model} travelling at ${this.currentSpeed}`)
    }
};

const jeep = new Car('jeep');
jeep.accelerate();
jeep.toString();


/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car {
    constructor(model) {
        super(model);
        this.model = 'electric';
    }
    accelerate() {
        super.accelerate();
    }
    toString() {
        console.log(`${this.model}`)
    }
};
const notJeep = new ElectricCar('notajeep');
notJeep.accelerate();
notJeep.toString();