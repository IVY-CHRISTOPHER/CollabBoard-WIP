import { Schema, ObjectId, model } from "mongoose";

//Creates a new MongoDB Schema named "ProjectSchema"
const ProjectSchema = new Schema(
    {
        projectName: {
            type: String,
            required: [true, "Project name is required."],
            minLength: [3, "Project name must be at least 3 characters."],
        },
        description: {
            type: String,
            required: [true, "Project Descriptions is required"],
            minLength: [15, "Description must be at least 15 Characters"],
        },
        milestones: {
            type: [
                {
                    type: ObjectId,
                    ref: "milestones",
                },
            ],
        },
        //TODO Have each new project start with a preset of instructions inside of them
        // default: [
        //     {
        //         milestoneName: "Welcome to your first Project!",
        //         projectId: this.ObjectId,
        //         tasks: [
        //             {
        //                 TaskName: "Edit this task to customize it!",
        //                 priority: "High",
        //                 status: "in-progress",
        //             },
        //         ],
        //     },
        // ],
        userId: {
            type: ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

export default model("Project", ProjectSchema);
