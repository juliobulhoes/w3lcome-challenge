import AppError from './AppError';

export default class NotFound extends AppError {
  constructor(message: string, status: number = 400) {
    super(message, status);
    this.name = 'NotFound';
    this.status = 404;
  }
}
