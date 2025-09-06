const ProjectController = require('../controllers/project.controller');
const { authenticate } = require('../config/jwt.config')

module.exports = app => {
    //Add owned Projects -> userId included in req.body by middleware
    app.post('/api/projects',
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        ProjectController.addProject
    );
    //Get all Projects
    app.get('/api/projects',
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        ProjectController.findAllProjects
    );
}