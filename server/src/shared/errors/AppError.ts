export class AppError implements Error {
  public name: string;

  public status: number;

  public message: string;

  public errors: AppError[] = [];

  public params?: Record<
    string,
    string | number | AppError | undefined | Error[]
  >;

  constructor(message: string, status: number = 500) {
    this.name = 'AppError';
    this.status = status || 500;
    this.message = message;
  }
}

export default AppError;
