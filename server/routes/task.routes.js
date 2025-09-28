import { addTask, findAllTasks } from "../controllers/task.controller.js";
import { authenticate } from "../config/jwt.config.js";

export default (app) => {
    // Route to create   task
    app.post(
        "/api/create",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        addTask
    );
    app.get(
        "/api/ -tasks",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        findAllTasks
    );
};
