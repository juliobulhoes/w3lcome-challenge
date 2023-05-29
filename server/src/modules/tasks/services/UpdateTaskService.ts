import { injectable, inject } from 'tsyringe';
import validator from 'validator';

import { BadRequest } from '@shared/errors';
import ITasksRepository from '@modules/tasks/repositories/ITasksRepository';
import Task from '@modules/tasks/infra/json/models/Task';

interface IUpdateTaskServiceDTO {
  id: number;
  titulo: string;
  concluida: boolean;
}

interface IValidateUpdateTaskServiceDTO {
  concluida: boolean;
  titulo: string;
}

@injectable()
class UpdateTaskService {
  constructor(
    @inject('TasksRepository')
    private tasksRepository: ITasksRepository,
  ) {}

  public validate({ concluida, titulo }: IValidateUpdateTaskServiceDTO) {
    if (concluida !== undefined && typeof concluida !== 'boolean') {
      throw new BadRequest('Concluida deve ser um booleano.');
    }

    if (titulo !== undefined && !titulo) {
      throw new BadRequest('Titulo não pode ser vazio.');
    }
  }

  public async execute(data: IUpdateTaskServiceDTO): Promise<Task> {
    const task = await this.tasksRepository.update(data);

    return task;
  }
}

export default UpdateTaskService;
