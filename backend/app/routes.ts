import authenticationController from "../modules/authentication/authentication.controller";
import newsController from "../modules/news/news.controller";
import webTokenMiddleware from '../middlewares/web-token';

export interface IRoute {
  method: string;
  path: string;
  middleware?: Function;
  callback: Function;
}

export const routes: IRoute[] = [
  {
    method: 'post',
    path: '/auth/new',
    callback: authenticationController.register,
  },
  {
    method: 'post',
    path: '/auth',
    callback: authenticationController.authorize,
  },
  {
    method: 'get',
    path: '/news',
    callback: newsController.getAll,
  },
  {
    method: 'get',
    path: '/news/:id',
    callback: newsController.get,
  },
  {
    method: 'post',
    path: '/news',
    middleware: webTokenMiddleware.check,
    callback: newsController.create,
  },
  {
    method: 'patch',
    path: '/news/:id',
    middleware: webTokenMiddleware.check,
    callback: newsController.update,
  },
  {
    method: 'delete',
    path: '/news/:id',
    middleware: webTokenMiddleware.check,
    callback: newsController.delete,
  },
];
