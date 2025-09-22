import { Schema, ObjectId, model } from 'mongoose';


//Creates a new MongoDB Schema named "ProjectSchema"
const ProjectSchema = new Schema({
    projectName: {
        type: String,
        required: [true, 'Project name is required.'],
        minLength: [3, 'Project name must be at least 3 characters.'],
        trim: [true]
    },
    mainTasks: {
        type: [{
            type: ObjectId,
            ref: "MainTask"
        }],
        //TODO Creating a project with tutorial tasks inside it.
        // default: [
        //     {
        //         mainTaskName: "Welcome to your first Project!",
        //         projectId: this.ObjectId
        // subTasks: [
        //     {
        //         subTaskName: "Edit this task to customize it!",
        //         priority: "High",
        //         status: "in-progress"
        //     }
        // ]
        //     }
        // ]
    },
    userId: {
        type: ObjectId,
        ref: "User"
    }
},
    { timestamps: true }
);

Project = model("Project", ProjectSchema);

export default Project;