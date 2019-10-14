const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const { movieController } = require('../controllers')

router.get('/movieList', movieController.movieList)
router.post('/addMovie', movieController.addMovie)
router.post('/editMovie', movieController.editMovie)
router.post('/deleteMovie', movieController.deleteMovie)

module.exports = router