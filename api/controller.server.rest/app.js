const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000))

// app.listen(3000, () => {
//   console.log('INICIANDO..')
// })



module.exports = app