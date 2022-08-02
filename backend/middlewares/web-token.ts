import { Request, Response, NextFunction } from 'express';
import service from '../modules/web-token/web-token.service';

class WebTokenMiddleware {
  public check(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;
    const token = authorization?.split(' ')[1];
    if (!authorization || !token) {
      return response.status(401).json({
        message: 'Пользователь не авторизован',
      });
    }

    const userPayload: any = service.verify(token);
    if (!userPayload) {
      return response.status(401).json({
        message: 'Токен невалиден',
      });
    }
    request.body.author = userPayload.id;
    next();
  }
}

export default new WebTokenMiddleware();
