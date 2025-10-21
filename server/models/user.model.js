import { Schema, ObjectId, model } from "mongoose";
import isEmail from "validator/lib/isEmail.js";
import { hash as _hash } from "argon2";

//User Schema for DB

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            required: [true, "Must enter First Name"],
            trim: [true],
        },
        lastName: {
            type: String,
            required: [true, "Must enter Last Name"],
            trim: [true],
        },
        email: {
            type: String,
            trim: [true],
            isLowercase: [true],
            unique: [true],
            required: [true, "Email address is required."],
            validate: [isEmail, "Invalid Email."],
        },
        password: {
            type: String,
            required: [true, "Password is required."],
            minLength: [8, "Password must be at least 8 characters."],
            trim: [true],
        },
        //TODO: Add roles to users to allow them to have specific permissions.
        // roles: {
        //     type: [],
        //     required: [true, 'Error loading userModel - User has no roles']
        // },
        projects: {
            type: [
                {
                    type: ObjectId,
                    ref: "Project",
                },
            ],
        },
        assignedTasks: {
            type: [
                {
                    type: ObjectId,
                    ref: "Task",
                },
            ],
        },
    },
    { timestamps: true }
);

// Using Argon2 (Argon2id(default)) for password encryption / MIDDLEWARE
UserSchema.virtual("confirmPassword")
    .get(function () {
        return this._confirmPassword;
    })

    .set(function (value) {
        return (this._confirmPassword = value);
    });

// Comparing passwords
UserSchema.pre("validate", function (next) {
    if (this.password !== this._confirmPassword) {
        this.invalidate("confirmPassword", "passwords must match");
    }
    next();
});

//Hashing Password
UserSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            this.password = await _hash(this.password);
        }
        next();
    } catch (err) {
        console.log(err);
    }
    next();
});

export default model("User", UserSchema);
