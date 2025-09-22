import { addProject, findAllProjects } from '../controllers/project.controller';
import { authenticate } from '../config/jwt.config';

export default app => {
    //Add owned Projects -> userId included in req.body by middleware
    app.post('/api/projects/create',
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        addProject
    );
    //Get all Projects
    app.get('/api/projects',
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        findAllProjects
    );
}