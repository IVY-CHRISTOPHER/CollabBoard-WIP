import {
    addProject,
    findAllProjects,
    findOneProject,
    updateProject,
    deleteProject,
} from "../controllers/project.controller.js";
import { authenticate } from "../config/jwt.config.js";

export default (app) => {
    //Add owned Projects -> userId included in req.body by middleware
    app.post(
        "/api/project/create",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        addProject
    );
    //Get all Projects
    app.get(
        "/api/projects",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        findAllProjects
    );
    //Get one Project
    app.get(
        "/api/project/:id",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        findOneProject
    );
    //Update a Project
    app.patch(
        "/api/project/update/:id",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        updateProject
    );
    //! Delete a Project by ID
    app.delete(
        "/api/project/delete/:id",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        deleteProject
    );
};
