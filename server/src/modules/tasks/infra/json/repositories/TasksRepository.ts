import ITasksRepository from '@modules/tasks/repositories/ITasksRepository';

import ICreateTaskDTO from '@modules/tasks/dtos/ICreateTaskDTO';
import IListTasksDTO from '@modules/tasks/dtos/IListTasksDTO';
import IPaginatedTasksDTO from '@modules/tasks/dtos/IPaginatedTasksDTO';

import Task from '../models/Task';

import TaskDoesNotExist from '@modules/tasks/errors/TaskDoesNotExist';

class TasksRepository implements ITasksRepository {
  private tasks: Task[] = [
    { id: 1, titulo: 'Aprender React', concluida: true },
    { id: 2, titulo: 'Estudar NodeJS', concluida: false },
    { id: 3, titulo: 'Praticar TypeScript', concluida: false },
  ];

  public async create(data: ICreateTaskDTO): Promise<Task> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newTaskId = this.tasks.length
          ? this.tasks[this.tasks.length - 1].id + 1
          : 1;

        const newTask = {
          id: newTaskId,
          titulo: data.titulo,
          concluida: false,
        };

        this.tasks.push(newTask);
        resolve(newTask);
      }, 100);
    });
  }

  public async update(data: Task): Promise<Task> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const { titulo, concluida } = data;

        const taskIndex = this.tasks.findIndex(item => item.id === data.id);

        if (taskIndex === -1) {
          reject(new TaskDoesNotExist());
        }

        const originalTask = this.tasks[taskIndex];

        const updatedTask: Task = {
          ...originalTask,
          titulo: titulo !== undefined ? titulo : originalTask.titulo,
          concluida:
            concluida !== undefined ? concluida : originalTask.concluida,
        };

        this.tasks[taskIndex] = updatedTask;

        resolve(updatedTask);
      }, 100);
    });
  }

  public async list({
    page = 1,
    limit = 10,
  }: IListTasksDTO): Promise<IPaginatedTasksDTO> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        const tasks = this.tasks.slice(startIndex, endIndex);

        const paginatedTasks = {
          rows: tasks,
          count: this.tasks.length,
        };

        resolve(paginatedTasks);
      }, 100);
    });
  }

  public async delete(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const taskIndex = this.tasks.findIndex(task => task.id === id);

        if (taskIndex === -1) {
          reject(new TaskDoesNotExist());
        }

        this.tasks.splice(taskIndex, 1);
        resolve();
      }, 100);
    });
  }
}

export default TasksRepository;
