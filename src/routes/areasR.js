const express = require('express')
const router = express.Router()
const controller = require('../controllers/areasC')


//GET
router.get('/', controller.getAll)
router.post('/',controller.createAreas)



module.exports = router