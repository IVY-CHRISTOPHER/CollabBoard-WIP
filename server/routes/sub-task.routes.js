import { addSubTask, findAllSubTasks } from '../controllers/sub-task.controller.js';
import { authenticate } from '../config/jwt.config.js';

export default app => {
    // Route to create sub task
    app.post('/api/sub-task/create',
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        addSubTask
    );
    app.get('/api/sub-tasks',
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        findAllSubTasks
    );
}