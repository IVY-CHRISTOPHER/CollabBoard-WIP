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
                $addToSet: { Milestones: newMilestone._id },
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
