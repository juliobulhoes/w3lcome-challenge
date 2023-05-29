import { injectable, inject } from 'tsyringe';
import validator from 'validator';

import { BadRequest } from '@shared/errors';
import ITasksRepository from '@modules/tasks/repositories/ITasksRepository';
import Task from '@modules/tasks/infra/json/models/Task';

interface ICreateTaskServiceDTO {
  titulo: string;
}

@injectable()
class CreateTaskService {
  constructor(
    @inject('TasksRepository')
    private tasksRepository: ITasksRepository,
  ) {}

  public validate({ titulo }: ICreateTaskServiceDTO): void {
    if (!titulo || validator.isEmpty(titulo)) {
      throw new BadRequest('Título é obrigatório.');
    }

    return;
  }

  public async execute({ titulo }: ICreateTaskServiceDTO): Promise<Task> {
    const task = await this.tasksRepository.create({ titulo });

    return task;
  }
}

export default CreateTaskService;
