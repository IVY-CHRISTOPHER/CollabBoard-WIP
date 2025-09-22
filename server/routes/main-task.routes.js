import { addMainTask, findAllMainTasks } from '../controllers/main-task.controller';
import { authenticate } from '../config/jwt.config';

export default app => {
    // Route to create Main task
    app.post('/api/main-tasks/create',
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        addMainTask
    );
    app.get('/api/main-tasks',
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        findAllMainTasks
    );
}