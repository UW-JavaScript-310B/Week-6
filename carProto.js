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

    decellerate() {
        this.currentSpeed--;
    }

    toString() {
        console.log(`My ${this.model} is going ${this.currentSpeed} fast!`);
    }

};

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const tacoma = new Car("Tacoma");
tacoma.accelerate();
tacoma.accelerate();
tacoma.decellerate();
console.log(tacoma.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

class ElectricCar extends Car {
    
    constructor(model) {
        super(model);
        this.motor = "electric";
    }

    accelerate() {
        super.accelerate();
        super.accelerate();
    }
    
    toString() {
        console.log(`My zippy, ${this.motor} ${this.model} is going ${this.currentSpeed} fast!`)
    }

}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const leaf = new ElectricCar("Leaf");
leaf.accelerate();
leaf.accelerate();
leaf.decellerate();
console.log(leaf.toString());