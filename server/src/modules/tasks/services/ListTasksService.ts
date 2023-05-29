import { injectable, inject } from 'tsyringe';

import ITasksRepository from '@modules/tasks/repositories/ITasksRepository';
import IListTasksDTO from '@modules/tasks/dtos/IListTasksDTO';
import IPaginatedTasksDTO from '@modules/tasks/dtos/IPaginatedTasksDTO';

@injectable()
class ListTasksService {
  constructor(
    @inject('TasksRepository')
    private tasksRepository: ITasksRepository,
  ) {}

  public async execute(data: IListTasksDTO): Promise<IPaginatedTasksDTO> {
    const tasks = this.tasksRepository.list(data);

    return tasks;
  }
}

export default ListTasksService;
