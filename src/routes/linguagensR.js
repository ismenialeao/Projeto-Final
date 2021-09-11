const express = require('express')
const router = express.Router()
const controller = require('../controllers/lingugensC')



//GET
router.get('/',controller.getAll)

//GET FRONT-END
router.get('/front-end', controller.getAllFront)

//GET BACK-END
router.get('/back-end',controller.getAllBack)

//POST
router.post('/', controller.createLinguagem)

//PATCH modificando a linguagem
router.patch('/:id', controller.update)

//DELETE
router.delete('/:id', controller.deleteLinguagem)





module.exports = router