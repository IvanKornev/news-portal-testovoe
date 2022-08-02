import { httpClient } from "./_http-client";
import type { AuthModule } from "./interfaces";
import type { AxiosResponse } from "axios";

const registration = async (form: UserForm<Field>): Promise<void> => {
  const body: UserForm<string> = prepareBody(form);
  const fullUrl = "/auth/new";
  await httpClient.post(fullUrl, body);
};

const authorization = async (form: UserForm<Field>): Promise<AxiosResponse> => {
  const body: UserForm<string> = prepareBody(form);
  const fullUrl = "/auth";
  return await httpClient.post(fullUrl, body);
};

const prepareBody = (form: UserForm<Field>): UserForm<string> => ({
  username: form.username.value,
  password: form.password.value,
});

const auth: AuthModule = {
  registration,
  authorization,
};
export default auth;
