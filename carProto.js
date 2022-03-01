/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class Car{
    constructor(model){
        this.model = model
        this.currentSpeed = 0
    }
    accelerate(){
        this.currentSpeed++
        
    }
    brake(){
        this.currentSpeed--
    }
    toString(){
        console.log(`The ${this.model} is at a speed of ${this.currentSpeed} MPH`)

    }
}

const mustang = new Car('Mustang')
console.log(mustang)
mustang.accelerate();
mustang.accelerate()
mustang.brake()
mustang.toString()


/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car{
    constructor(model, topSpeed, isElectric = true){
        super(model, topSpeed)
        this.isElectric = isElectric
    }
}
const prius = new ElectricCar('Prius')
console.log(prius)
prius.accelerate()
prius.accelerate()
prius.brake()
prius.toString()