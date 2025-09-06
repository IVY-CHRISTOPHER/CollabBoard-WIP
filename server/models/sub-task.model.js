const mongoose = require('mongoose');

const SubTaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: [true, 'Task name is required.'],
        minLength: [3, 'Main Task Name must be at least 3 characters.'],
        trim: [true]
    },
    description: {
        type: String,
        minLength: [3, 'Description must be at least 3 characters.']
    },
    MainTaskId: { type: mongoose.ObjectId, ref: "MainTask" }
}, { timestamps: true }
);

SubTask = mongoose.model('Task', SubTaskSchema);

module.exports = SubTask