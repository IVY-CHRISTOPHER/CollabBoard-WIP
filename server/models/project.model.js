const mongoose = require('mongoose')


//Creates a new MongoDB Schema named "ProjectSchema"
const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: [true, 'Project name is required.'],
        minLength: [3, 'Project name must be at least 3 characters.'],
        trim: [true]
    },
    mainTasks: {
        type: [{ type: mongoose.ObjectId, ref: "MainTask" }],
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
    userId: { type: mongoose.ObjectId, ref: "User" }
},
    { timestamps: true }
);

Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;