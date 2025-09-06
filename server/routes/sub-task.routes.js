const SubTaskController = require('../controllers/sub-task.controller');
const { authenticate } = require('../config/jwt.config')

module.exports = app => {
    // Route to create sub task
    app.post('/api/sub-tasks',
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        SubTaskController.addSubTask
    );
    app.get('/api/sub-tasks',
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        SubTaskController.findAllSubTasks
    );
}