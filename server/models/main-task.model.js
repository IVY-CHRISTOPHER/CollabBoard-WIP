const mongoose = require('mongoose');

const MainTaskSchema = new mongoose.Schema({
    mainTaskName: {
        type: String,
        required: [true, 'Main Task Name is required.'],
        minLength: [3, 'Main Task Name must be at least 3 characters.'],
        trim: [true]
    },
    description: {
        type: String,
        minLength: [3, 'Description must be at least 3 characters.']
    },
    subTasks: {
        type: [{ type: mongoose.ObjectId, ref: "SubTask" }],
    },
    projectId: {type: mongoose.ObjectId, ref: "Project"}
}, { timestamps: true }
);

MainTask = mongoose.model('MainTask', MainTaskSchema);

module.exports = MainTask;