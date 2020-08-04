import express, { request } from 'express';
import ClassesController from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsController';


const classesControlers = new ClassesController();
const connectionsController = new ConnectionsController()
const routes = express.Router();

routes.get('/users', (request, response) => {
    return response.json({message: 'Hello World'});
});

routes.post('/classes',classesControlers.create);
routes.get('/classes',classesControlers.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);


export default routes;