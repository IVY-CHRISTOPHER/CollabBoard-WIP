import { Schema, ObjectId, model } from 'mongoose';

const SubTaskSchema = new Schema({
    subTaskName: {
        type: String,
        required: [true, 'Task name is required.'],
        minLength: [3, 'Main Task Name must be at least 3 characters.'],
        trim: [true]
    },
    description: {
        type: String,
        minLength: [3, 'Description must be at least 3 characters.']
    },
    //TODO Stretch Goals!
    //assigns users that have access to the project to this specific sub-task
    // assignment: {
    //     type: mongoose.ObjectId, ref: "Project_Users" 
    // },
    //Allows the task creator to upload an image
    // attachments: [{
    //     fileName: String,
    //     url: String,
    //     mimetype: String,
    //     size: Number,
    //     uploadedAt: {type: Date, default: Date.now}
    // }],
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        required: [true]
    },
    status: {
        type: String,
        enum: ["to-do", "in-progress", "done"],
        required: [true]
    },
    mainTaskId: {
        type: ObjectId,
        ref: "MainTask"
    }
}, { timestamps: true }
);

SubTask = model('Task', SubTaskSchema);

export default SubTask