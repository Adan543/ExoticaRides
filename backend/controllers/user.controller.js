const db = require('../models')
const bcrypt = require('bcrypt');
const validator = require('validator');
const BaseController = require('./base.controller');


module.exports = class userController extends BaseController {


    constructor() {
        /** set bill details model */
        super('user');

    }

async login_user(req, res) {
    const userCredentials = db.user_credential;

    try {
        const result = await userCredentials.findByPk(req.body.data.email[0]);

        if (result) {
            const storedPassword = result.dataValues.password;

            // Use bcrypt to compare hashed passwords securely
            const passwordMatch = await bcrypt.compare(req.body.data.password[0], storedPassword);

            if (passwordMatch) {
                const user_db = db.user
                const customer = db.customer
                const user = await user_db.findOne({where:{email:req.body.data.email[0]}})
                const user_id = user.user_id
                const telephone = db.telephone
                const customerData = await customer.findByPk(user_id, {
                    include: [{ model: telephone, attributes: ['tel_no']}],
                  });
                  if(customerData){
                    console.log(customerData)
                res.status(200).send(customerData)   
                  }
                  else{
                    res.status(201).send(user_id)
                  }
               
            } else {
                res.status(404).send('Wrong Password');
            }
        } else {
            res.status(404).send('Wrong Email');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal Server Error');
    }
}



async createuser(req, res) {
    const user_credentials = db.user_credential;
    const isValidCNIC = (cnic) => {
        // CNIC format: 12345-1234567-1
        const cnicRegex = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
        return cnicRegex.test(cnic);
      };
      
      const isValidContactNumber = (contactNumber) => {
        // Contact number format: 03xx-xxxxxxx or +923xx-xxxxxxx
        const contactNumberRegex = /^(03[0-9]{2}-[0-9]{7}|\+923[0-9]{2}-[0-9]{7})$/;
        return contactNumberRegex.test(contactNumber);
      };
      
      // Your existing validation code
      
      if (!validator.isAlpha(req.body.data.fname[0]) || !validator.isAlpha(req.body.data.lname[0])) {
          return res.status(400).send('First name and last name must only contain alphabetic characters');
      }
      
      if (!validator.isEmail(req.body.data.email[0])) {
          return res.status(400).send(`Invalid Email Format. Add ".com" in the end.`);
      }
      
      if (!validator.isLength(req.body.data.password[0], { min: 6 })) {
          return res.status(400).send('Password must be at least 6 characters long');
      }
      
      // Additional CNIC validation
      if (!isValidCNIC(req.body.data.cnic[0])) {
          return res.status(400).send('Invalid CNIC format');
      }
      
      // Additional contact number validation
      if (!isValidContactNumber(req.body.data.tel_no[0])) {
          return res.status(400).send('Invalid contact number format');
      }
    

    try {
        // Check if the email already exists
        const existingUser = await user_credentials.findOne({
            where: { email: req.body.data.email[0] },
        });

        if (existingUser) {
            return res.status(409).send('Email already exists');
        }

        // Create a transaction
        const transaction = await db.sequelize.transaction();

        try {
            // Hash the password before storing it
            const hashedPassword = await bcrypt.hash(req.body.data.password[0], 10);

            const data1 = {
                email: req.body.data.email[0],
                password: hashedPassword,
            };
            console.log(hashedPassword)
            // Step 1: Create user_credentials
            await user_credentials.create(data1, { transaction });

            console.log('User credentials created successfully');

            const user = db.user;
            const data2 = {
                email: req.body.data.email[0],
            };

            // Step 2: Create user
            await user.create(data2, { transaction });

            console.log('User created successfully');
            const newUser = await user.findOne({
                where: { email: req.body.data.email[0] },
                transaction,
            });

            const customer = db.customer;
            const data3 = {
                customer_user_id: newUser.user_id,
                customer_name: req.body.data.fname[0] + ' ' + req.body.data.lname[0],CNIC:req.body.data.cnic[0]
            };

            // Step 3: Create customer
            await customer.create(data3, { transaction });

            console.log('Customer created successfully');

            const telnum = db.telephone;
            const data4 = {
                customer_user_id: newUser.user_id,tel_no:req.body.data.tel_no[0]
            }
            await telnum.create(data4, { transaction });

            console.log('Telephone created successfully');
            // Commit the transaction if all steps are successful
            await transaction.commit();
            res.status(200).send('Sign Up Successfully');
            // Send response or perform any other actions

        } catch (err) {
            // Rollback the transaction if an error occurs
            await transaction.rollback();

            res.status(500).send('Internal Server Error');
            // Handle error
        }
    } catch (error) {
        console.error('Error during user creation:', error);
        res.status(500).send('Internal Server Error');
    }
}

}

























//running code
// async login_user(req, res) {
//     const userCredentials = db.user_credential;

//     try {
//         const result = await userCredentials.findByPk(req.body.data.email[0]);

//         if (result) {
//             const storedPassword = result.dataValues.password;

//             if (storedPassword === req.body.data.password[0]) {
//                 res.status(200).send('Login successful!');
//             } else {
//                 res.status(404).send('Wrong Password');
//             }
//         } else {
//             res.status(404).send('Wrong Email');
//         }
//     } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).send('Internal Server Error');
//     }
// }


// async createuser(req, res) {
//     const user_credentials = db['user_credential'];

//     // Check if the email already exists
//     const existingUser = await user_credentials.findOne({
//         where: { email: req.body.data.email[0] },
//     });

//     if (existingUser) {
//         console.log('iam running')
//         // Email already exists, send a response indicating the conflict
//         return res.status(409).send('Email already exists');
//     }

//     // Create a transaction
//     const transaction = await db.sequelize.transaction();

//     try {
//         console.log(req.body);

//         const data1 = {
//             email: req.body.data.email[0],
//             password: req.body.data.password[0]
//         };

//         // Step 1: Create user_credentials
//         await user_credentials.create(data1, { transaction });

//         console.log('User credentials created successfully');

//         const user = db['user'];
//         const data2 = {
//             email: req.body.data.email[0]
//         };

//         // Step 2: Create user
//         await user.create(data2, { transaction });
        
//         console.log('User created successfully');
//         const newUser = await user.findOne({
//             where: { email: req.body.data.email[0] },
//             transaction,
//         });

//         const customer = db['customer'];
//         const data3 = {
//             customer_user_id: newUser.user_id,
//             customer_name: req.body.data.fname[0] + ' ' + req.body.data.lname[0],
//         };

//         // Step 3: Create customer
//         await customer.create(data3, { transaction });

//         console.log('Customer created successfully');

//         // Commit the transaction if all steps are successful
//         await transaction.commit();
//         res.status(200).send('Sign Up Successfully')
//         // Send response or perform any other actions

//     } catch (err) {
//         // Rollback the transaction if an error occurs
//         await transaction.rollback();

//         res.status(500).send('Internal Server Error')
//         // Handle error
//     }
// }




































// async login_user(req,res){
//     const user_credentials = db['user_credential'];
//     const result = await user_credentials.findByPk(req.body.data.email[0])
//     if(result!=null){
//     const pwd = resultt.dataValues.password
//     if (pwd == req.bod.data.password[0]){
//         res.status(200).send()}
//     else{
//         res.status(404).send('Wrong Password')    
//     }
//     }
    
//     else{
//     res.status(404).send('Wrong Email')
// }
// }





// async createuser(req, res) {
//     const user_credentials = db['user_credential'];

//     // Create a transaction
//     const transaction = await db.sequelize.transaction();

//     try {
//         console.log(req.body);

//         const data1 = {
//             email: req.body.data.email[0],
//             password: req.body.data.password[0]
//         };

//         // Step 1: Create user_credentials
//         await user_credentials.create(data1, { transaction });

//         console.log('User credentials created successfully');

//         const user = db['user'];
//         const data2 = {
//             email: req.body.data.email[0]
//         };

//         // Step 2: Create user
//         await user.create(data2, { transaction });
        
//         console.log('User created successfully');
//         const newUser = await user.findOne({
//             where: { email: req.body.data.email[0] },
//             transaction,
//         });

//         const customer = db['customer'];
//         const data3 = {
//             customer_user_id: newUser.user_id,
//             customer_name: req.body.data.fname[0] + ' ' + req.body.data.lname[0],
//         };

//         // Step 3: Create customer
//         await customer.create(data3, { transaction });

//         console.log('Customer created successfully');

//         // Commit the transaction if all steps are successful
//         await transaction.commit();
//         res.status(200).send('Sign Up Successfully')
//         // Send response or perform any other actions

//     } catch (err) {
//         // Rollback the transaction if an error occurs
//         await transaction.rollback();

//         res.status(404).send()
//         // Handle error
//     }
// }

// async createuser(req, res) {
//     const user_credentials = db['user_credential'];

//     console.log(req.body);

//     const data1 = {
//         user_name: req.body.data.email[0],
//         password: req.body.data.password[0]
//     };

//     user_credentials.create(data1)
//         .then(() => {
//             console.log('User credentials created successfully');

//             const user = db['user'];
//             const data2 = {
//                 user_id: 'cs-0001',
//                 user_name: req.body.data.email[0]
//             };

//             user.create(data2)
//                 .then(() => {
//                     console.log('User created successfully');

//                     const customer = db['customer'];
//                     const data3 = {
//                         customer_user_id: 'cs-0001',
//                         customer_name: req.body.data.fname[0] + ' ' + req.body.data.lname[0],
//                     };

//                     customer.create(data3)
//                         .then(() => {
//                             console.log('Customer created successfully');
//                             // Send response or perform any other actions
//                         })
//                         .catch(err => {
//                             console.log('Error creating customer:', err);
//                             // Handle error
//                         });
//                 })
//                 .catch(err => {
//                     console.log('Error creating user:', err);
//                     // Handle error
//                 });
//         })
//         .catch(err => {
//             console.log('Error creating user credentials:', err);
//             // Handle error
//         });
// }



        
    // if (req.body.user_id) {
        
    //     let a = await user.create(data)
    // res.status('200').send('a')
    // }
    // res.status('404').send("can not create due to id not found")
// }


    
