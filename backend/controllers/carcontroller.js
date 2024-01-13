const db = require('../models')
const BaseController = require('./base.controller');

module.exports = class carController extends BaseController {


    constructor() {
        /** set bill details model */
        super('car');

    }


async getcars(req, res) {
        try {
          const carInfoList = await db.car_info.findAll({
            include: [
              {
                model: db.car,
                include: [
                  { model: db.manufactured_by, include: [{ model: db.company }] },
                ],
              },
            ],
            where: {
              available: 'yes' // Assuming 'available' is a field in the car_info model
            }
          });
          const transformedArray = carInfoList.map(carInfo => ({
            license_no:carInfo.car.license_no,
            car_name: carInfo.car_name,
            car_company: carInfo.car.manufactured_by.company.company_name,
            manufacture_year: carInfo.car.manufactured_by.manufacture_year,
            engine_cc: `${carInfo.engine_cc}cc`,
            car_type: carInfo.car_type,
            image: carInfo.car.license_no,  // Replace with actual image property if available
            car_rate: carInfo.car_rate,
          }));
          
          console.log(transformedArray);
          res.send(transformedArray);
        } catch (error) {
          console.error(error);
        }
      }

      
}