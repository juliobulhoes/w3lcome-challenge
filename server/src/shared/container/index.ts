import { container } from 'tsyringe';

import TasksRepository from '@modules/tasks/infra/json/repositories/TasksRepository';
import ITasksRepository from '@modules/tasks/repositories/ITasksRepository';

container.registerSingleton<ITasksRepository>(
  'TasksRepository',
  TasksRepository,
);
