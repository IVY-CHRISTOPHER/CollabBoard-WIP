import { argon2id } from 'argon2';
import { Schema, ObjectId } from 'mongoose';
import { crypto } from 'crypto';


const ForgotPasswordSchema = new Schema({
    validationCode: {
        type: String,
        required: [true, "Failed to create Validation Code"],
        minLength: [10, "Minimum length not met"],
        trim: [true]
    },
    userId: {
        type: ObjectId,
        ref: "User"
    }
});

//Use Crypto to generate a random url variable and hash it in the DB
const token = crypto.randomBytes(32).toString(`base64url`)
//! Add Hashing code and store the variable

export default ForgotPasswordSchema