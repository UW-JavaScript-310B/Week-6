/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor ( model ) {
        this.model = model;
        this.currentSpeed = 0; // currentSpeed here?
    }
    currentSpeed = 0; // or currentSpeed here?
    accelerate() {
        this.currentSpeed += 1;
        return this.currentSpeed;
    };
    brake() {
        this.currentSpeed -= 1;
        return this.currentSpeed;
    };
    toString() {
        return `This is a ${this.model} moving at ${this.currentSpeed}.`
    }
};


//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const silverCar = new Car(Prius);
silverCar.accelerate();
silverCar.accelerate();
silverCar.brake();
console.log(silverCar.toString());
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car {
    constructor ( model ) {
        super ( model );
        this.motor = 'electric';
    };
    accelerate() {
        this.accelerate();
        this.accelerate();
    }
    toString() {
        return `This ${this.motor} ${super.model} is moving at ${super.currentSpeed}`
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
