import {
    deleteUser,
    findOneUser,
    LoginUser,
    logoutUser,
    updateUser,
    registerUser,
    findAllUsers,
} from "../controllers/user.controller.js";

export default (app) => {
    //Register/Login/Logout user
    app.post("/api/register", registerUser);
    app.post("/api/login", LoginUser);
    app.post("/api/logout", logoutUser);
    //Get all users
    app.get("/api/users", findAllUsers);
    //Get one user
    app.get("/api/user/:id", findOneUser);
    //update a user
    app.patch("/api/update/:id", updateUser);
    //! Delete a user by ID
    app.delete("/api/delete/:id", deleteUser);
};
