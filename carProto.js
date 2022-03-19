$( document ).ready(function() {
    console.log( "ready!" );
/**
 * Car class
 * @constructor
 * @param {String} model
 */
 class Car{

    constructor(model){
        this.model = model;
        this.currentSpeed = 0;
    };

    accelerate(){
        this.currentSpeed++;
    };
    brake(){
        this.currentSpeed--;
    };

    toString(){

        
        console.log(`This ${this.model} is moving ${this.currentSpeed} units of speed!`);

    }
}




//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const gasCar = new Car('Smart Car')
gasCar.accelerate();
gasCar.accelerate();
gasCar.brake();
gasCar.toString();

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car {
    constructor(model) {
        super(model);
        this.motor = 'electric';
    };

    accelerate() {
        super.accelerate();
        super.accelerate();
    }

    brake() {
        super.brake()
    }

    toString() {
        console.log(`This new electric ${this.model} is moving ${this.currentSpeed} units of speed! It accelerates way faster than the gas version!`);
    }
};
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const electric = new ElectricCar('Bugmobile')
electric.accelerate();
electric.accelerate();
electric.brake();
electric.toString();


});