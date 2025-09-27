import jwt from "jsonwebtoken";
const { verify } = jwt;
const secret = process.env.SECRET_KEY;

export function authenticate(req, res, next) {
    console.log("config/jwt.config.js - Line 5", req.cookies);
    verify(req.cookies.userToken, secret, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            console.log("config/jwt.config.js - Line 11", payload);
            next();
        }
    });
}
