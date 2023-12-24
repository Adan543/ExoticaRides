const companyConyroller = require('../controllers/company.controller.js')
const router = require('express').Router();

 router.get('/getcompany',companyConyroller.getcompany);
 router.put('/createcompany',companyConyroller.createcompany)

 module.exports = router