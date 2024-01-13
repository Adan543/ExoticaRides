const authenticate = (req, res, next) => {
    if (req.session.userid) {
        // User is authenticated
        next();
    } else {
        // Redirect to login or send an unauthorized response
        res.status(401).send('Unauthorized');
    }
};
module.exports =authenticate