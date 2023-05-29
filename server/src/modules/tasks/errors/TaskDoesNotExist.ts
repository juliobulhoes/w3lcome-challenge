import { BadRequest } from '@shared/errors';

class TaskDoesNotExist extends BadRequest {
  constructor() {
    super('Tarefa inexistente.', 404);
  }
}

export default TaskDoesNotExist;
