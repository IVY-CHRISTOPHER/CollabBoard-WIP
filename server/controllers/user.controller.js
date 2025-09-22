import User from '../models/user.model';
const secret = process.env.SECRET_KEY;
import { sign } from 'jsonwebtoken';
import { verify } from 'argon2';

export async function registerUser(req, res) {
    try {
        // Check if the email sent in this request in already in the database
        const potentialUser = await User.findOne({
            email: req.body.email
        });
        if (potentialUser) {
            res.status(400).json({ message: "Email already exists" });
        }
        else {
            // Create the user
            const newUser = await User.create(req.body);
            // Generate a user token
            const userToken = sign({
                _id: newUser._id,
                email: newUser.email,
                username: newUser.userName
            },
                secret,
                { expiresIn: '1h' });
            console.log("UserController line 27 - userToken - ", userToken);
            // Send the users data back to the client
            res.status(201).cookie('userToken', userToken, { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 }).json(newUser);
        }
    }
    catch (err) {
        res.status(400).json({ error: err });
        console.log("Error Creating new user ", err);
    }
}
export async function LoginUser(req, res) {
    console.log("Login attempt:", req.body);
    //Populate the users projects with projects in the users projects array
    const potentialUser = await User.findOne({ email: req.body.email });
    console.log("Found user:", potentialUser);
    console.log("Hashed Password: ", potentialUser.password);
    //If user exists compare passwords
    if (potentialUser) {
        if (await verify(potentialUser.password, req.body.password)) {
            console.log("Password match:");
            // Create token on password match
            const userToken = sign(
                { _id: potentialUser._id, username: potentialUser.userName },
                secret,
                { expiresIn: "1h" }
            );
            // Respond with user data and token
            res.status(201).cookie("userToken", userToken, {
                httpOnly: true,
                maxAge: 2000 * 60 * 60
            })
                .json(potentialUser);
        } else {
            // On incorrect password, respond with error messages
            res.status(400).json({
                errors: {
                    password: { message: "Incorrect username/password" }
                }
            });
        }
    } else {
        //on non existant username, respond with error messages
        res.status(400).json({
            errors: {
                username: { message: "Incorrect username/password" }
            }
        });
    }
}
export function logoutUser(res, req) {
    res.status(200).clearCookie("userToken").json({ message: "logout successful" });
}

// Finds all users
export function findAllUsers(req, res) {
    User.find()
        .then((allUsers) => {
            res.json(allUsers)
        })
        .catch((err) => {
            res.status(400).json({ message: "Error finding all users.", error: err });
        });
}