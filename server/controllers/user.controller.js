const User = require('../models/user.model');
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');

module.exports = {
    registerUser: async (req, res) => {
        try {
            // Check if the email sent in this request in already in the database
            const potentialUser = await User.findOne({
                email: req.body.email
            })
            if (potentialUser) {
                res.status(400).json({ message: "Email already exists" })
            }
            else {
                // Create the user
                const newUser = await User.create(req.body);
                // Generate a user token
                const userToken = jwt.sign({
                    _id: newUser._id,
                    email: newUser.email,
                    username: newUser.userName
                },
                    secret,
                    { expiresIn: '1h' });
                console.log("UserController line 27 - userToken - ", userToken)
                // Send the users data back to the client
                res.status(201).cookie('userToken', userToken, { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 }).json(newUser);
            }
        }
        catch (err) {
            res.status(400).json({ error: err });
            console.log("Error Creating new user ", err)
        }
    }
}

// Finds all users
module.exports.findAllUsers = (req, res) => {
    User.find()
        .then((allUsers) => {
            res.json(allUsers)
        })
        .catch((err) => {
            res.status(400).json({ message: "Error finding all users.", error: err });
        });
};