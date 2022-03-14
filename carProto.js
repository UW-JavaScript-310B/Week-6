/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car
{
    constructor(model)
    {
        this.model = model
        this.currentSpeed = 0
    }
    accelerate()
    {
        this.currentSpeed++
    }
    brake()
    {
        this.currentSpeed--
    }
    toString()
    {
       return `model: ${this.model} currentspeed: ${this.currentSpeed}`
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
let myCar = new Car("Porsche")
myCar.accelerate()
myCar.accelerate()
myCar.brake()
console.log(myCar.toString())
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car
{
    constructor(model)
    {
        super(model)
        this.motor = 'electric'
    }
    accelerate()
    {
        super.accelerate();
        super.accelerate()
    }
    toString()
    {
        return `model: ${this.model} motor: ${this.motor} currentspeed: ${this.currentSpeed}`
        //return `${super.toString()} motor: ${this.motor}`
    }
}

let myECar = new ElectricCar("Tesla")
myECar.accelerate()
myECar.accelerate()
myECar.brake()
console.log(myECar.toString())