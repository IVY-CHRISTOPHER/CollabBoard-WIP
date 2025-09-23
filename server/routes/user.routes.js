import { LoginUser, logoutUser } from '../controllers/user.controller.js';
import { registerUser, findAllUsers } from '../controllers/user.controller.js';

export default app => {
    //Register/Login/Logout user
    app.post('/api/user/register', registerUser);
    app.post('/api/user/login', LoginUser)
    app.post('/api/user/logout', logoutUser)
    //Get all users
    app.get('/api/users', findAllUsers);
}