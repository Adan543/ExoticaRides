const carController = require('../controllers/carcontroller.js')
// const baseConyroller = require('../controllers/base.controller.js');
const { Model } = require('sequelize');
const router = require('express').Router();

const car_controller = new carController();

// routes for company
// router.get('/getuser',user_controller.List.bind(user_controller));
router.get('/getcars',car_controller.getcars);

// router.post('/createuser',user_controller.createuser)
// router.post('/loginauth',user_controller.login_user)


 module.exports = router