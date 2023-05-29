import Task from './ITaskDTO';

export default interface IPaginatedTasksDTO {
  rows: Task[];
  count: number;
}
