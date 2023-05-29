import { Router } from 'express';

import TasksController from '@modules/tasks/infra/http/controllers/TasksController';

const tasksRouter = Router();
const tasksController = new TasksController();

tasksRouter.post('/', tasksController.create);
tasksRouter.delete('/:id', tasksController.delete);
tasksRouter.get('/list', tasksController.list);
tasksRouter.patch('/', tasksController.update);

export default tasksRouter;
