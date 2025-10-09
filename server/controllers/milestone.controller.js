import Milestone from "../models/milestone.model.js";
import Project from "../models/project.model.js";

export async function addMilestone(req, res) {
    try {
        //Creates a new Milestone
        const newMilestone = await Milestone.create(req.body);
        //After creating the Milestone, add it to the projects DB
        const updatedProject = await Project.findByIdAndUpdate(
            newMilestone.projectId,
            {
                $addToSet: { milestones: newMilestone._id },
            }
        );
        res.json(newMilestone);
    } catch (err) {
        res.status(400).json({ message: "Error Adding Milestone", error: err });
    }
}

//Finds all Milestones
export async function findAllMilestones(req, res) {
    Milestone.find()
        .then((allMilestones) => {
            res.json(allMilestones);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Error finding all Milestones",
                error: err,
            });
        });
}

//Finds one Milestone
export async function findOneMilestone(req, res) {
    Milestone.findOne({ _id: req.params.id })
        .then((oneMilestone) => {
            res.json(oneMilestone);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Error finding one Milestone",
                error: err,
            });
        });
}
//Updates a Milestone
export async function updateMilestone(req, res) {
    Milestone.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedMilestone) => {
            res.json(updatedMilestone);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Error updating Milestone",
                error: err,
            });
        });
}
//!Deletes a Milestone
export async function deleteMilestone(req, res) {
    Milestone.deleteOne({ _id: req.params.id })
        .then((deletedMilestone) => {
            res.json(deletedMilestone);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Error deleting Milestone",
                error: err,
            });
        });
}
