const BTest = require('../node_modules/domain.main.module/helper/BTest')

class CTest{
    constructor(){
        // this.obTest = new B_Test()
        this.obTest = new BTest()
    }
    message3(){
        // return `CONTROLLER | ${this.obTest.message2()}`
        return this.obTest.message2()
    }
}

let ocTest = new CTest()
console.log(ocTest.message3())

module.exports = CTest