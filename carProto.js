/**
 * Car class
 * @constructor
 * @param {String} model
 */
 class Car {
    constructor(currentSpeed, model) {
        if (currentSpeed)
            this.currentSpeed = currentSpeed;
        else
            this.currentSpeed = 0;

        if (model)
            this.model = model;
        else
            this.model = "Taurus"
       
    }
    accelerate() {
        this.currentSpeed += 1;
    }
    brake() {
        if(this.currentSpeed > 0)
            this.currentSpeed -= 1;
        else
            this.currentSpeed = 0;
    }
    toString() {
        console.log(`${this.model} is at ${this.currentSpeed}mph.`);
    }
};
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const myCar = new Car(10);
myCar.accelerate();
myCar.accelerate();
myCar.brake();
myCar.toString();
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car{
    constructor(currentSpeed, model) {
        super(currentSpeed, model);
        this.motor = "electric";
    }
    accelerate() {
        super.accelerate();
        super.accelerate();
    }
    toString() {
        console.log(`Electric car ${super.toString()}` );
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const myElectricCar = new ElectricCar(10);
myElectricCar.accelerate();
myElectricCar.accelerate();
myElectricCar.brake();
myElectricCar.toString();