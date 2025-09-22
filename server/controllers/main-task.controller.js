import MainTask from '../models/main-task.model';
import Project from '../models/project.model';

export async function addMainTask(req, res) {
    try {
        //Creates a new main task
        const newMainTask = await MainTask.create(req.body);
        //After creating the Main Task, add it to the projects DB
        const updatedProject = await Project.findByIdAndUpdate(newMainTask.projectId, {
            $addToSet: { mainTasks: newMainTask._id }
        });
        res.json(newMainTask);
    }
    catch (err) {
        res.status(400).json({ message: "Error Adding Main Task", error: err })
    }
}

//Finds all Main Tasks
export async function findAllMainTasks(req, res) {
    MainTask.find()
        .then((allMainTasks) => {
            res.json(allMainTasks)
        })
        .catch((err) => {
            res.status(400).json({ message: "Error finding all Main Tasks", error: err })
        });
}