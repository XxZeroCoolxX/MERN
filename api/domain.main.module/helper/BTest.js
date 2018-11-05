// import DTest from '../node_modules/infrastructure.data.mongodb/helper/DTest'
const DTest = require('../node_modules/infrastructure.data.postgresql/helper/DTest')

class BTest{
    constructor(){
        this.odTest = new DTest()
    }
    message2(){
        // return `BUSINESS | ${this.odTest.message1()}`
        return this.odTest.message1()

    }
}

module.exports = BTest