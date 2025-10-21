import { Schema, ObjectId, model } from "mongoose";

const TaskSchema = new Schema(
    {
        taskName: {
            type: String,
            required: [true, "Task name is required."],
            minLength: [3, "Task Name must be at least 3 characters."],
            trim: [true],
        },
        description: {
            type: String,
            minLength: [3, "Description must be at least 3 characters."],
        },
        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            required: [true],
        },
        status: {
            type: String,
            enum: ["to-do", "in-progress", "done"],
            required: [true],
        },
        createdBy: {
            type: ObjectId,
            ref: "user",
            required: [true, "Creator information is required."],
        },
        milestoneId: {
            type: ObjectId,
            ref: "milestone",
        },
        //! May Change when Multiple Users are Implemented
        assignedTo: {
            type: ObjectId,
            ref: "user",
            required: [false]
        },
        dueDate: {
            type: Date,
            required: [true, "Due date is required."]
        },
        attachments: {
            type: [
                {
                    fileName: String,
                    url: String,
                    mimetype: String,
                    size: Number,
                    uploadedAt: { type: Date, default: Date.now },
                },
            ],
        },
        comments: {
            type: String,
            minLength: [3, "Comment must be at least 3 characters."],
        },
    },
    { timestamps: true }
);

export default model("task", TaskSchema);
