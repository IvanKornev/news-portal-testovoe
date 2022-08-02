import mongoose from "mongoose";

interface IDatabase {
  connect(password: string): void;
}

class Database implements IDatabase {
  public connect(uri: string) {
    mongoose.connect(uri);
  }
}

const database = new Database();
export {
  IDatabase,
  database,
};
