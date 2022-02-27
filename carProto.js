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
        console.log(`My ${this.model} is going ${this.currentSpeed}.`)
    }

}


const rav4 = new Car('Toyota Rav4');
rav4.accelerate();
rav4.accelerate();
rav4.brake();
rav4.toString() 


/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class ElectricCar extends Car {
    constructor(model) {
        super(model);
        this.motor = "electric";
    }

    accelerate() {
         super.accelerate();
         super.accelerate();
    }
 //why is undefined showing up between my original to string and the added string
    toString() {
        console.log( `${super.toString()}  The car has an ${this.motor} motor.`);
    }


}

const prius = new ElectricCar ('Toyota Prius');
console.log(prius)

prius.accelerate();
prius.accelerate();
prius.brake()
prius.toString();
