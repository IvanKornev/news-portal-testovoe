import type { AxiosResponse } from "axios";

export interface AuthModule {
  registration(form: UserForm<Field>): Promise<void>;
  authorization(form: UserForm<Field>): Promise<AxiosResponse>;
}

export interface NewsModule {
  add(form: NewsForm<Field>): Promise<AxiosResponse>;
  update(form: NewsForm<Field>, objectId: string | string[]): Promise<AxiosResponse>;
  getAll(): Promise<AxiosResponse>;
  remove(objectId: string | string[]): Promise<AxiosResponse>;
  get(objectId: string | string []): Promise<AxiosResponse>;
}
