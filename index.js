const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000
const Tours = require('./routes/toursRoutes')

app.set('./views', path.join(__dirname, './views'))
app.set('view engine', 'pug')

app.use('/tours', Tours)


app.listen(PORT, () => console.log(`escuchando en el puerto ${PORT}`))