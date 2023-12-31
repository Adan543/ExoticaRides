const userController = require('../controllers/user.controller.js')
// const baseConyroller = require('../controllers/base.controller.js');
const { Model } = require('sequelize');
const router = require('express').Router();

const user_controller = new userController();

// routes for company
// router.get('/getuser',user_controller.List.bind(user_controller));
router.get('/getuser',user_controller.getuser);

router.post('/createuser',user_controller.createuser)
router.post('/loginauth',user_controller.login_user)


 module.exports = router