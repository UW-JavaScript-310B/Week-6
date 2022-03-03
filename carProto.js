/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {

    constructor(model)
    {
        
        this.model = model;
        this.currentSpeed = 0;
        this.accelerate = () => {
            this.currentSpeed +=1;
        }
        this.brake = () => {
            this.currentSpeed -=1;
        }
    }
        toString() {
        return this;
    }

}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const zipCar = new Car('Spirit');
zipCar.accelerate();
zipCar.accelerate();
zipCar.brake();
console.log(zipCar.toString());
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class Electric extends Car {
    constructor(model) {
        super('Cool Wind');
        this.motor = 'electric';
        accelerate: () => {
            super.accelerate();
            super.accelerate();
        }
    }
        toString() {
        return this;
    }

    
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
 
const eCar = new Electric('Awesome');
eCar.accelerate();
eCar.accelerate();
eCar.brake();


console.log(eCar.toString());


