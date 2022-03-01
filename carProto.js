/**
 * Car class
 * @constructor
 * @param {String} model
 */
// INSTANCE PROPERTIES V PROTOTYPES ??? LOOK AT VIDEO lecture 645

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

    class Car {
        constructor (model) {
            this.model = model;
            this.currentSpeed = 0;    
        }
            
            //        currentSpeed = 0;

                    accelerate() {
                    this.currentSpeed++;
                    }
                    brake(){
                     this.currentSpeed--;   
                    }
                    toString(){
                     console.log(`my ${this.model} is going this ${this.currentSpeed} mph`)   
                    }
     }

     const honda = new Car('Odyssey');
     const subaru = new Car('Outback');

        honda.accelerate();
        honda.accelerate();
        honda.brake();

        honda.toString();

// be sure to use super in the right places so you inherit from car object

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

     class ElectricCar extends Car {
        constructor (model) {
            super(model);
            this.motor = "electric";

            }
        accelerate() {
            console.log(`value of current to start ${this.currentSpeed}`);
             return super.accelerate() * 2;


           console.log(`value of current to after accel ${this.currentSpeed}`);
            
        }
        toString() {
            console.log(`hello we drive a ${this.model}. It goes ${this.currentSpeed}`);
        }
     }

     const bolt = new ElectricCar('Bolt');
        bolt.accelerate();
        bolt.accelerate();
        bolt.accelerate();

        bolt.brake();
        bolt.toString();
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
