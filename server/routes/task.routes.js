import {
    addTask,
    findAllTasks,
    findTaskById,
    updateTaskById,
    deleteTaskById,
} from "../controllers/task.controller.js";
import { authenticate } from "../config/jwt.config.js";

export default (app) => {
    // Route to create task
    app.post(
        "/api/create",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        addTask
    );
    // Find all tasks
    app.get(
        "/api/tasks",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        findAllTasks
    );
    // Find task by ID
    app.get(
        "/api/task/:id",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        findTaskById
    );
    // Update task by ID
    app.put(
        "/api/task/:id",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        updateTaskById
    );
    //! Delete task by ID
    app.delete(
        "/api/task/:id",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        deleteTaskById
    );
};
