const db = require('../models')



module.exports = class BaseController {

    /** set model */
    Model = null;
    model = null;

    constructor(model) {
        this.model = model
    }


    async List (req, res){
        this.model = db[this.model];
    
        
        let a = await this.model.findOne()
        res.status('200').send(req.body)
    }


}