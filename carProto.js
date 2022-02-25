/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class Car{
    constructor(model){
        this.currentSpeed=0
        this.model=model
    }
    accelerate(){
        this.currentSpeed++
    }

    brake(){
        this.currentSpeed--
    }

    toString(){
        return `Vehicle ${this.model} is moving at ${this.currentSpeed} mph`
    }

}

const rav4 = new Car('rav4')
const acura = new Car('acura')

rav4.accelerate()
rav4.accelerate()
rav4.brake()
console.log(rav4.toString())

acura.accelerate()
acura.accelerate()
acura.accelerate()
acura.brake()
acura.brake()
console.log(acura.toString())



/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
