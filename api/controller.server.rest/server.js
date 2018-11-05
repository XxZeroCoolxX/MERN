const app = require('./app')
const CTest = require('./helper/CTest')

let ocTest = new CTest()
let data = ocTest.message3()
// console.log(ocTest.message3())

app.listen(
    app.get('/test', (require, response) => {
        response.json(data)
    }).get('port'), () => console.log(`Iniciando Express en el puerto ${app.get('port')}`)
)