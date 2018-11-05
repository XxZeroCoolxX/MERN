const data = require('./data')

class DTest{
    constructor(){
        // this.json = 'DATA'
        this.json = data
    }

    message1(){
        return this.json
    }

}

module.exports = DTest