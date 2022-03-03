/**
 * Car class
 * @constructor
 * @param {String} model
 */

 $( document ).ready(function() {
    console.log( "ready!" );
class Car{

    constructor(model){
        this.model = model;
        this.currentSpeed = 0;
        
    }

    accelerate(){
        this.currentSpeed++;
    }
    brake(){
        this.currentSpeed--;
    }

    toString(){
       
        $('body').append(`<h1 class="color">${this.model} is moving with ${this.currentSpeed}ms speed!<h1>`);
        console.log(`This ${this.model} is moving with ${this.currentSpeed}ms speed!`);

    }
}

let newCar = new Car('Mercedes');
newCar.accelerate();
newCar.accelerate();
newCar.brake();
newCar.toString();

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

 class ElectricCar extends Car{

    constructor(model){
       super(model);
       super.accelerate();
       super.brake();
    }
  
    toString(){
        $('body').append(`<h1 class="color1">This is new Model ${this.model} is moving with ${this.currentSpeed}ms speed!<h1>`);
        console.log(`This is new Model ${this.model} is moving with ${this.currentSpeed}ms speed!`);
    }
}

let brandNewCar = new ElectricCar('Audi');
brandNewCar.accelerate();
brandNewCar.accelerate();
brandNewCar.brake();
brandNewCar.toString();

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
 });