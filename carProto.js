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
        this.motor = 'Gas'
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

const impreza = new Car('Impreza');

impreza.accelerate();
impreza.accelerate();
impreza.decellerate();
impreza.toString();



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
        console.log(`My $80,000 ${this.model} has an ${this.motor} motor!`);
    }


}

const tesla = new ElectricCar ('Tesla');
console.log(tesla)

tesla.accelerate();
tesla.accelerate();
tesla.decellerate()
tesla.toString();