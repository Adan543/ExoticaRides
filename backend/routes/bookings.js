const bookingsController = require('../controllers/bookingcontroller.js')
// const baseConyroller = require('../controllers/base.controller.js');
const { Model } = require('sequelize');
const router = require('express').Router();

const booking_controller = new bookingsController();

// routes for company
// router.get('/getuser',user_controller.List.bind(user_controller));
router.post('/bookcar',booking_controller.bookacar);
router.get('/bookingrecords/:user_id',booking_controller.booking_records);

router.get('/:attributeList',booking_controller.cardata);

// router.post('/createuser',user_controller.createuser)
// router.post('/loginauth',user_controller.login_user)


 module.exports = router