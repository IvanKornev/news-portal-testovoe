class ApiError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }

  static userIsUnauthorized() {
    return new ApiError(401, 'Пользователь не авторизован');
  }

  static tokenIsInvalid() {
    return new ApiError(401, 'Токен некорректен');
  }
}

export default ApiError;
