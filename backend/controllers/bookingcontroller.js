const db = require('../models')
const BaseController = require('./base.controller');

module.exports = class bookingController extends BaseController {


    constructor() {
        /** set bill details model */
        super('books');

    }


  async cardata(req,res){
    const attributeList = req.params.attributeList.split(',');
    res.send(attributeList)
  }


  async bookacar(req, res) {
    const transaction = await db.sequelize.transaction();
    console.log(req.body)
    try {
      const booking = db.books;
      const data1 = {
        license_no: req.body.data.license,
        customer_user_id: req.body.data.user_id,
        booking_date: req.body.data.bookdate,
        due_date: req.body.data.duedate,
        deliver_location: req.body.data.address,
      }
      await booking.create(data1, { transaction })
  
      if (req.body.data.addtelno) {
        // Validate Pakistani telephone number format
        const telNoRegex = /^(03[0-9]{2}-[0-9]{7}|\+923[0-9]{2}-[0-9]{7})$/;
        if (telNoRegex.test(req.body.data.addtelno)) {
          const tel = db.telephone;
          const data2 = {
            customer_user_id: req.body.data.user_id,
            tel_no: req.body.data.addtelno,
          };
          await tel.create(data2, { transaction });
        } else {
          await transaction.rollback();
          return res.status(400).send('Invalid Pakistani telephone number format');
        }
      }
  
      await transaction.commit();
      return res.status(200).send('Booking Successful');
    } catch (err) {
      console.error(err);
      await transaction.rollback();
      return res.status(500).send('Internal Server Error');
    }
  }
async booking_records(req,res){
  const customer_id = req.params.user_id;
  const result = await db.books.findAll({
    where: { customer_user_id: customer_id },
    include: [
      {
        model: db.car,
        attributes: ['license_no', 'car_name'],
        include: [
          {
            model: db.car_info,
            attributes: ['car_name', 'car_rate'],
          },
          {
            model: db.manufactured_by,
            attributes: ['company_id'],
            include: [
              {
                model: db.company,
                attributes: ['company_name'],
              },
            ],
          },
        ],
      },
    ],
  });
  
  res.send(result)

}
}
