import { injectable, inject } from 'tsyringe';
import validator from 'validator';

import { BadRequest } from '@shared/errors';
import ITasksRepository from '@modules/tasks/repositories/ITasksRepository';
import Task from '@modules/tasks/infra/json/models/Task';

interface IDeleteTaskServiceDTO {
  id: number;
}

@injectable()
class DeleteTaskService {
  constructor(
    @inject('TasksRepository')
    private tasksRepository: ITasksRepository,
  ) {}

  public async execute({ id }: IDeleteTaskServiceDTO): Promise<void> {
    await this.tasksRepository.delete(id);

    return;
  }
}

export default DeleteTaskService;
