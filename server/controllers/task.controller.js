import Task from "../models/task.model.js";
import Milestone from "../models/milestone.model.js";

export async function addTask(req, res) {
    try {
        // Creates the new Task
        const newTask = await Task.create(req.body);
        //After creating the task, add it to the Milestone DB
        const updatedMilestone = await Milestone.findByIdAndUpdate(
            newTask.MilestoneId,
            {
                $addToSet: { Tasks: newTask._id },
            }
        );
        res.json(newTask);
    } catch (err) {
        res.status(400).json({ message: "Error Adding Task", error: err });
    }
}

// Finds all Tasks
export async function findAllTasks(req, res) {
    Task.find()
        .then((allTasks) => {
            res.json(allTasks);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Error finding all Tasks",
                error: err,
            });
        });
}

// Finds a Task by ID
export async function findTaskById(req, res) {
    Task.findById(req.params.id)
        .then((foundTask) => {
            res.json(foundTask);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Error finding Task by ID",
                error: err,
            });
        });
}

// Updates a Task by ID
export async function updateTaskById(req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then((updatedTask) => {
            res.json(updatedTask);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Error updating Task by ID",
                error: err,
            });
        });
}

//! Deletes a Task by ID
export async function deleteTaskById(req, res) {
    Task.findByIdAndDelete(req.params.id)
        .then((deletedTask) => {
            res.json(deletedTask);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Error deleting Task by ID",
                error: err,
            });
        });
}