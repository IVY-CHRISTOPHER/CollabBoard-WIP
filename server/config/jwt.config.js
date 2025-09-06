const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

module.exports.authenticate = (req, res, next) => {
    console.log("config/jwt.config.js - Line 5", req.cookies);
    jwt.verify(req.cookies.userToken, secret, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        }
        else {
            console.log("config/jwt.config.js - Line 11", payload);
            next();
        }
    });
}