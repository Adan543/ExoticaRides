const db = require('../models')
const bcrypt = require('bcrypt');
const validator = require('validator');
const BaseController = require('./base.controller');

module.exports = class userController extends BaseController {


    constructor() {
        /** set bill details model */
        super('user');

    }

async getuser (req, res) {
    const user_credentials = db['user_credential'];
    const user = db['user'];
    const customer = db['customer'];
    const result = await user_credentials.findOne({
        where: { email: 'karimjawwad1@gmail.com' },
        include: [
          {
            model: user,
            attributes: ['user_id'],
            include: [
              {
                model: customer,
                attributes: ['customer_name'],
                foreignKey: 'customer_user_id',
              },
            ],
          },
        ],
      })
      console.log(result)
      res.send(result.user.customer.customer_name)
    
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
                res.status(200).send('Login successful!');
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
    // Input validation

    // Validate email

    if (!validator.isAlpha(req.body.data.fname[0]) || !validator.isAlpha(req.body.data.lname[0])) {
        return res.status(400).send('First name and last name must only contain alphabetic characters');
    }
    if (!validator.isEmail(req.body.data.email[0])) {
        return res.status(400).send(`Invalid Email Format. Add ".com" in the end.`);
    }

    // Validate password
    if (!validator.isLength(req.body.data.password[0], { min: 6 })) {
        return res.status(400).send('Password must be at least 6 characters long');
    }

    // Validate first name and last name
    

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
                customer_name: req.body.data.fname[0] + ' ' + req.body.data.lname[0],
            };

            // Step 3: Create customer
            await customer.create(data3, { transaction });

            console.log('Customer created successfully');

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


    
}