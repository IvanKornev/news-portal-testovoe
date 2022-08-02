import dotenv from 'dotenv';

interface IConfig {
  port: number;
  databaseUri: string;
}

class Config {
  private instance: IConfig;

  constructor() {
    dotenv.config();
    this.instance = {
      port: this.getPort(),
      databaseUri: this.getDatabaseUri(),
    };
  }

  private getDatabaseUri(): string {
    const uri = <string>process.env.DATABASE_URI;
    return uri;
  }

  private getPort(): number {
    const appPort = <string>process.env.APP_PORT;
    return parseInt(appPort, 10) || 5000;
  }

  public get() {
    return this.instance;
  }
}

const config = new Config();
export {
  IConfig,
  config,
};
