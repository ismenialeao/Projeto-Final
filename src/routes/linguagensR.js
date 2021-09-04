const express = require('express')
const router = express.Router()
const controller = require('../controllers/lingugensC')



//GET
router.get('/',controller.getAll)
router.post('/', controller.createLinguagem)




module.exports = router