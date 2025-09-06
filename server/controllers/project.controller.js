const Project = require('../models/project.model');
const User = require('../models/user.model');
const jwt = require('../config/jwt.config')

module.exports.addProject = async (req, res) => {
    try {
        // Creates a new project
        const newProject = await Project.create(req.body);
        //After creating Project add the project to the users created projects
        const updatedUser = await User.findByIdAndUpdate(newProject.userId, {
            $addToSet: { projects: newProject._id }
        });
        res.json(newProject);
    }
    catch (err) {
        res.status(400).json({ message: "Error Adding Project", error: err })
    }
};

//Finds all Projects
module.exports.findAllProjects = async (req, res) => {
    Project.find()
        .then((allProjects) => {
            res.json(allProjects)
        })
        .catch((err) => {
            res.status(400).json({ message: "Error finding all Projects", error: err })
        });
}