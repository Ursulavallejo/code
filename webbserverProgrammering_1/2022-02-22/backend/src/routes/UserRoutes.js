import UserController from "../controller/UserController.js";
import userController from "../controller/UserController.js";

// Endpoint + Business Logic and CRUD Operations
const routes = (app) => {
//CREATE
    app.post('/user/', UserController.createUser)

//READ
    app.get('/users', UserController.getUsers)
    app.get('/users/name', userController.getUserNames)
    app.get('/user/:name', UserController.getUserByName)

    //UPDATE
    app.put('/user/', UserController.updateUserByName)

//DELETE
    app.delete('/user/:name', UserController.deleteUserByName)
}

export default {
    routes
}