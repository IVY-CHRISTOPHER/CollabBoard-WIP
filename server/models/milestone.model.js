import { Schema, ObjectId, model } from "mongoose";

const MilestoneSchema = new Schema(
    {
        milestoneName: {
            type: String,
            required: [true, "Milestone Name is required."],
            minLength: [3, "Milestone Name must be at least 3 characters."],
            trim: [true],
        },
        description: {
            type: String,
            minLength: [3, "Description must be at least 3 characters."],
        },
        tasks: {
            type: [
                {
                    type: ObjectId,
                    ref: "task",
                },
            ],
        },
        projectId: {
            type: ObjectId,
            ref: "Project",
        },
    },
    { timestamps: true }
);

export default model("milestone", MilestoneSchema);
