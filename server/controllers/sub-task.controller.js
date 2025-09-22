import SubTask from '../models/sub-task.model';
import MainTask from '../models/main-task.model';

export async function addSubTask(req, res) {
    try {
        // Creates the new Sub-Task
        const newSubTask = await SubTask.create(req.body);
        //After creating the sub-task, add it to the main-tasks DB
        const updatedMainTask = await MainTask.findByIdAndUpdate(newSubTask.MainTaskId, {
            $addToSet: { subTasks: newSubTask._id }
        });
        res.json(newSubTask);
    }
    catch (err) {
        res.status(400).json({ message: "Error Adding Sub Task", error: err })
    }
}

// Finds all Sub-Tasks
export async function findAllSubTasks(req, res) {
    SubTask.find()
        .then((allSubTasks) => {
            res.json(allSubTasks)
        })
        .catch((err) => {
            res.status(400).json({ message: "Error finding all Sub Tasks", error: err })
        });
}