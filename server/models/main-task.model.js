import { Schema, ObjectId, model } from 'mongoose';

const MainTaskSchema = new Schema({
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
        type: [{
            type: ObjectId,
            ref: "SubTask"
        }],
    },
    projectId: {
        type: ObjectId,
        ref: "Project"
    }
}, { timestamps: true }
);

export default model('MainTask', MainTaskSchema);