const db = require('../models')
const BaseController = require('./base.controller');

module.exports = class BillDetailsController extends BaseController {


    constructor() {
        /** set bill details model */
        super('company');

    }

async getcompany (req, res) {
const company = db['company']
    console.log(req.body);
    req.body
    let a = await company.findOne()
    res.status('200').send(a)
}

async createcompany (req, res) {

    console.log(req.body);
    req.body
    if (req.body.company_id) {
        let a = await company.create(req.body)
    res.status('200').send(a)
    }
    res.status('404').send("can not creat due to id not found")
}


    
}