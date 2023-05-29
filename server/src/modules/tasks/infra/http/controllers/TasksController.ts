import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTaskService from '@modules/tasks/services/CreateTaskService';
import ListTasksService from '@modules/tasks/services/ListTasksService';
import DeleteTaskService from '@modules/tasks/services/DeleteTaskService';
import UpdateTaskService from '@modules/tasks/services/UpdateTaskService';

export default class TasksController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { titulo } = request.body;

    const createTask = container.resolve(CreateTaskService);

    createTask.validate({ titulo });

    const task = await createTask.execute({ titulo });

    return response.status(201).json(task);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const { limit, page } = request.query;

    const listTasks = container.resolve(ListTasksService);

    const task = await listTasks.execute({
      limit: limit ? Number(limit) : 10,
      page: page ? Number(page) : 1,
    });

    return response.status(200).json(task);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTask = container.resolve(DeleteTaskService);

    await deleteTask.execute({ id: Number(id) });

    return response.status(204).send();
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, titulo, concluida } = request.body;

    const updateTask = container.resolve(UpdateTaskService);

    updateTask.validate({
      concluida,
      titulo,
    });

    const updatedTask = await updateTask.execute({
      id,
      titulo,
      concluida,
    });

    return response.status(200).json(updatedTask);
  }
}
