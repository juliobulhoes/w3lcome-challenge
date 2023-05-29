import Task from '@modules/tasks/infra/json/models/Task';

import ICreateTaskDTO from '@modules/tasks/dtos/ICreateTaskDTO';
import IListTasksDTO from '@modules/tasks/dtos/IListTasksDTO';
import IPaginatedTasksDTO from '@modules/tasks/dtos/IPaginatedTasksDTO';

export default interface ITasksRepository {
  create(data: ICreateTaskDTO): Promise<Task>;
  update(data: Task): Promise<Task>;
  list(query: IListTasksDTO): Promise<IPaginatedTasksDTO>;
  delete(id: number): Promise<void>;
}
