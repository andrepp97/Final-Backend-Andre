const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 1997

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const { movieRouter, categoryRouter, connectionRouter } = require('./routers')

app.use('/movie', movieRouter)
app.use('/category', categoryRouter)
app.use('/conn', connectionRouter)

app.listen(port, () => console.log('API aktif di port ' + port))