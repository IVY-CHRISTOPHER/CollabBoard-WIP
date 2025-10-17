import {
    addMilestone,
    deleteMilestone,
    findAllMilestones,
    findOneMilestone,
    updateMilestone,
} from "../controllers/milestone.controller.js";
import { authenticate } from "../config/jwt.config.js";

export default (app) => {
    // Route to create Milestone
    app.post(
        "/api/milestone/create",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        addMilestone
    );
    //Finds All Milestones
    app.get(
        "/api/milestones",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        findAllMilestones
    );
    //Finds One Milestones
    app.get(
        "/api/milestone/:id",
        // authenticate, //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        findOneMilestone
    );
    //Updates Milestone
    app.patch(
        "/api/milestone/update/:id",
        // authenticate //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        updateMilestone
    );
    //! Deletes Milestone
    app.delete(
        "/api/milestone/delete/:id",
        // authenticate //! Disabled for DEV purposes ENABLE BEFORE LAUNCH
        deleteMilestone
    )
};
