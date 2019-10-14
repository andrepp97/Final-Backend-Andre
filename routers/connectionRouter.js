const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const { connectionController } = require('../controllers')

router.get('/connectionList', connectionController.movcat)
router.get('/getMovieName', connectionController.getMovieName)
router.get('/getCategory', connectionController.getCategory)
router.post('/addConnection', connectionController.addConnection)
router.post('/deleteConnection', connectionController.deleteConnection)

module.exports = router