import Task from '@modules/tasks/infra/json/models/Task';

export default interface IPaginatedTasksDTO {
  rows: Task[];
  count: number;
}
