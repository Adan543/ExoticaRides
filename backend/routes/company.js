const companyController = require('../controllers/company.controller.js')
const baseConyroller = require('../controllers/base.controller.js');
const { Model } = require('sequelize');
const router = require('express').Router();

const company_controller = new companyController();

// routes for company
router.get('/getcompany',company_controller.List.bind(company_controller));
router.put('/createcompany',company_controller.createcompany)


 module.exports = router