import { Schema, ObjectId, model } from 'mongoose';
import { isEmail } from 'validator';
import { hash as _hash } from 'argon2';

//User Schema for DB

const UserSchema = new Schema({
    userName: {
        type: String,
        required: [true, 'Username is required.'],
        minLength: [3, 'Username must be at least 3 characters.'],
        trim: [true]
    },
    email: {
        type: String,
        trim: [true],
        isLowercase: [true],
        unique: [true],
        required: [true, 'Email address is required.'],
        validate: [isEmail, 'Invalid Email.']
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        minLength: [8, 'Password must be at least 8 characters.'],
        trim: [true]
    },
    roles: {
        type: [],
        required: [true, 'Error loading userModel - User has no roles']
    },
    projects: {
        type: [{
            type: ObjectId,
            ref: "Project"
        }]
    }
},
    { timestamps: true }
);

// Using Argon2 (Argon2id(default)) for password encryption / MIDDLEWARE
UserSchema.virtual("confirmPassword")
    .get(() => this.confirmPassword)
    .set((value) => (this.confirmPassword = value));

// Comparing passwords
UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", 'passwords must match');
    }
    next();
});

//Hashing Password
UserSchema.pre("save", async function (next) {
    try {
        const hash = await _hash("password");
        this.password = hash
    }
    catch (err) {
        console.log(err)
    }
    next()
});

export default model("User", UserSchema);

