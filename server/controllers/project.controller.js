import Project from "../models/project.model.js";
import User from "../models/user.model.js";

export async function addProject(req, res) {
    try {
        // Creates a new project
        const newProject = await Project.create(req.body);
        //After creating Project add the project to the users created projects
        const updatedUser = await User.findByIdAndUpdate(newProject.userId, {
            $addToSet: { projects: newProject._id },
        });
        res.json(newProject);
    } catch (err) {
        res.status(400).json({ message: "Error Adding Project", error: err });
    }
}

//Finds all Projects
export async function findAllProjects(req, res) {
    Project.find()
        .then((allProjects) => {
            res.json(allProjects);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Error finding all Projects",
                error: err,
            });
        });
}

//Finds one project
export async function findOneProject(req, res) {
    Project.findOne({ _id: req.params.id })
    .then((OneProject) => {
        res.json(OneProject);
    })
    .catch((err) => {
        res.status(400).json({
            message: "Error finding one project.",
            error: err
        });
    });
}

//Updates a project
export async function updateProject(req, res) {
    Project.findByIdAndUpdate(
        {
            _id: req.params.id
        },
        req.body,
        {
            new: true,
            runValidators: true
        }
    )
    .then((updatedProject) => {
        res.json(updatedProject);
    })
    .catch((err) => {
        res.status(400).json({
            message: "Error updating project.",
            error: err
        });
    });
}

//! Deletes a Project
export async function deleteProject(req, res) {
    Project.deleteOne({_id: req.params.id})
    .then((deletedProject) => {
        res.json(deletedProject);
    })
    .catch((err) => {
        res.status(400).json({
            message: "Error deleting Project",
            error: err
        });
    });
}