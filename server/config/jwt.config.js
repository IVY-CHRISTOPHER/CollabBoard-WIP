import jwt from "jsonwebtoken";
const { verify } = jwt;
const secret = process.env.SECRET_KEY;

//middleware to authenticate user when requests are made
export function authenticate(req, res, next) {
    console.log("config/jwt.config.js - Line 5", req.cookies);
    verify(req.cookies.userToken, secret, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            console.log("config/jwt.config.js - Line 11", payload);
            // if user is authenticated add the user ID to the request object so that it can be accessed in the routes as needed
            req.body.userId = payload._id;
            next();
        }
    });
}
