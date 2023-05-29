import AppError from './AppError';

export default class AccessDenied extends AppError {
  constructor(
    message = 'Você não tem permissão para acessar este recurso.',
    previousText = true,
  ) {
    super(previousText ? `Acesso negado: ${message}` : message, 401);
    this.name = 'AccessDenied';
    this.status = 401;
  }
}
