const MainTaskController = require('../controllers/main-task.controller');
const { authenticate } = require('../config/jwt.config')

module.exports = app => {
    // Route to create Main task
    app.post('/api/main-tasks',
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        MainTaskController.addMainTask
    );
    app.get('/api/main-tasks',
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        MainTaskController.findAllMainTasks
    );
}