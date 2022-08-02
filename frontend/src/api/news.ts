import { httpClient, setTokenInRequest } from "./_http-client";
import type { NewsModule } from './interfaces';
import type { AxiosResponse } from "axios";

const urlSlug = "/news";

const add = async (form: NewsForm<Field>): Promise<AxiosResponse> => {
  setTokenInRequest();
  const body = prepareBody(form);
  return await httpClient.post(urlSlug, body);
};

const get = async (id: string | string[]): Promise<AxiosResponse> => {
  setTokenInRequest();
  const fullUrl = `${urlSlug}/${id}`;
  return await httpClient.get(fullUrl);
};

const remove = async (id: string | string[]): Promise<AxiosResponse> => {
  setTokenInRequest();
  const fullUrl = `${urlSlug}/${id}`;
  return await httpClient.delete(fullUrl);
};

const update = async(form: NewsForm<Field>, objectId: string | string[]): Promise<AxiosResponse> => {
  const fullUrl = `${urlSlug}/${objectId}`;
  const body = prepareBody(form);
  return await httpClient.patch(fullUrl, body);
}

const getAll = async (): Promise<AxiosResponse> => {
  return await httpClient.get(urlSlug);
};

const prepareBody = (form: NewsForm<Field>): NewsForm<string> => ({
  title: form.title.value,
  body: form.body.value,
});

const news: NewsModule = {
  add,
  get,
  remove,
  update,
  getAll,
};
export default news;
