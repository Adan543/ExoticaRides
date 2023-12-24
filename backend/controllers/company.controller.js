const db = require('../models')

const company = db['company']

const getcompany = async (req, res) =>{

    console.log(req.body);
    req.body
    let a = await company.findOne({ where: { company_name: req.body.company_name } })
    res.status('200').send(a)
}

const createcompany = async (req, res) =>{

    console.log(req.body);
    req.body
    if (req.body.company_id) {
        let a = await company.create(req.body)
    res.status('200').send(a)
    }
    res.status('404').send("can not creat due to id not found")
}


module.exports  = {
    getcompany,
    createcompany
}