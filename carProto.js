/**
 * Car class
 * @constructor
 * @param {String} model
 */


 class Car {
    constructor(model) {
      this.model = model;
      this.currentSpeed = 0;
    }
    accelerate() {
        this.currentSpeed ++;
    }
    brake() {
        this.currentSpeed --;
    }
    toString(){
        console.log(`My ${this.model} is going ${this.currentSpeed} mph fast`)
    }
  };

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const crv = new Car ('crv');
const corolla = new Car ('corolla');

crv.accelerate();
crv.accelerate();
crv.brake();
crv.toString();



/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

class ElectricCar extends Car{
    constructor(model){
      super(model);
      this.motor = 'electric';
    };

    accelerate() {
      super.accelerate() * 2;
    };

    toString(){
      console.log(`My ${this.model} is going ${this.currentSpeed} mph fast`)
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const tesla = new ElectricCar ('tesla');
console.log(tesla.currentSpeed)

tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.toString();
