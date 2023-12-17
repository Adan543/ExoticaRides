const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize(
 'exoticaridesdb',
 'root',
 '12345',
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port:'3306'
  }
);



sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

 


sequelize.sync().then(() => {
  console.log('Book table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});