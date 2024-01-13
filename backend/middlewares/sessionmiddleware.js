const session = require('express-session');

const sessionMiddleware = session({
    secret: 'extoticarides12345',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600000, // Set the session to expire in 1 hour (adjust as needed)
    
        secure: false, // Set to true in production if using HTTPS
    },
});


module.exports = sessionMiddleware;
