import AppError from './AppError';

export default class BadRequest extends AppError {
  constructor(message: string, status: number = 400) {
    super(message, status);
    this.name = 'BadRequest';
    this.status = 400;
  }
}
