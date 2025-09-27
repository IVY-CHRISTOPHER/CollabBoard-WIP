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
