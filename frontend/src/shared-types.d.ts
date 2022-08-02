type NavbarActionType = "authorization" | "registration";
type ValidationSchema = array<object>;
type RawJSON = string;

interface Field {
  value: string;
  label: string;
  placeholder?: string;
  type?: string;
}

interface News {
  title: string;
  author: object;
  body: string;
}

interface UserForm<T> {
  username: T;
  password: T;
}

interface NewsForm<T> {
  title: T;
  body: T;
}
