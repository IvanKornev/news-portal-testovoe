import express, { Express } from 'express';
import cors from 'cors';

import { config, IConfig } from './config';
import { routes, IRoute } from './routes';
import { database, IDatabase } from './database';

export class App {
  private config: IConfig;
  private instance: Express;
  private database: IDatabase;
  private routes: IRoute[];

  constructor() {
    this.config = config.get();
    this.routes = routes;
    this.database = database;
    this.instance = express();

    this.useExtensions();
    this.prepareRoutes();
  }
  
  public run(): void {
    this.database.connect(this.config.databaseUri);
    this.instance.listen(this.config.port);
  }

  public getInstance(): Express {
    return this.instance;
  }

  private prepareRoutes(): void {
    this.routes.forEach((route) => {
      const { method, path, callback, middleware } = route;
      this.instance[method as keyof Express](path, middleware ?? callback, callback);
    });
  }

  private useExtensions(): void {
    this.instance.use(cors());
    this.instance.use(express.json());
  }
}
