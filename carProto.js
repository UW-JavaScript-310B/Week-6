/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car{
    constructor(model){
        this.currentSpeed = 0;
        this.model = model;
    }
    accelerate(){
        this.currentSpeed++
    }
    brake(){
        this.currentSpeed--
    }
    toString(){
       return console.log(`${this.model} has ${this.currentSpeed}`);
    }

}
const obj = new Car('Tarus');

class ElectricCar extends Car{
    constructor(model){
        super();
        this.motor = 'electric';
        this.accelerate();
        this.accelerate();
        this.brake();
        console.log(instance.toString());
    }
    
}


//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
