module.exports = {
    USERNAME: 'root',
    PASS: '12345',
    DB: 'exoticaridesdb',
    HOST: '127.0.0.1',
    dialect:'mysql',
    PORT:'3306',
    pool: {
        max: 5,//max req from server/db
        min: 0,//min req from server/db
        acquire: 30000,
        idle: 10000
      }
}