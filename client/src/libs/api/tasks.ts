import api from '../../services/api';

import IPaginatedTasksDTO from '../../dtos/IPaginatedTasksDTO';
import ITaskDTO from '../../dtos/ITaskDTO';

const TasksAPI = {
  createTask: async (title: string): Promise<ITaskDTO> => {
    const response = await api.post<ITaskDTO>('/tasks', {
      titulo: title,
    });

    return response.data;
  },

  getTasks: async (page: number): Promise<IPaginatedTasksDTO> => {
    const response = await api.get<IPaginatedTasksDTO>('/tasks/list', {
      params: {
        page: page || 1,
        limit: 5,
      },
    });

    return response.data;
  },

  updateTask: async (task: ITaskDTO): Promise<ITaskDTO> => {
    const response = await api.patch<ITaskDTO>('/tasks', task);

    return response.data;
  },

  deleteTask: async (task: ITaskDTO): Promise<void> => {
    await api.delete(`/tasks/${task.id}`);
  },
};

export default TasksAPI;
