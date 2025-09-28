import {
    addMilestone,
    findAllMilestones,
} from "../controllers/milestone.controller.js";
import { authenticate } from "../config/jwt.config.js";

export default (app) => {
    // Route to create Milestone
    app.post(
        "/api/create",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        addMilestone
    );
    app.get(
        "/api/Milestones",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        findAllMilestones
    );
};
