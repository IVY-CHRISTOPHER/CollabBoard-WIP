const SubTask = require('../models/sub-task.model');
const MainTask = require('../models/main-task.model');

module.exports.addSubTask = async (req, res) => {
    try {
        // Creates the new Sub-Task
        const newSubTask = await SubTask.create(req.body);
        //After creating the sub-task, add it to the main-tasks DB
        const updatedMainTask = await MainTask.findByIdAndUpdate(newSubTask.MainTaskId, {
            $addToSet: { subTask: newSubTask._id }
        });
        res.json(newSubTask);
    }
    catch (err) {
        res.status(400).json({ message: "Error Adding Sub Task", error: err })
    }
};

// Finds all Sub-Tasks
module.exports.findAllSubTasks = async (req, res) => {
    SubTask.find()
        .then((allSubTasks) => {
            res.json(allSubTasks)
        })
        .catch((err) => {
            res.status(400).json({ message: "Error finding all Sub Tasks", error: err })
        });
};