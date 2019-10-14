const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const { categoryController } = require('../controllers')

router.get('/categoryList', categoryController.categoryList)
router.post('/addCategory', categoryController.addCategory)
router.post('/editCategory', categoryController.editCategory)
router.post('/deleteCategory', categoryController.deleteCategory)

module.exports = router