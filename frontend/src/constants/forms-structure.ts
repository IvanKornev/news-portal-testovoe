const user: UserForm<Field> = {
  username: {
    value: "",
    label: "Имя пользователя",
    type: "text",
  },
  password: {
    value: "",
    label: "Пароль",
    type: "password",
  },
};

const news: NewsForm<Field> = {
  title: {
    value: "",
    label: "Название",
    placeholder: "Новая новость",
  },
  body: {
    value: "",
    label: "Текст",
    placeholder: "Описание новости",
  },
};

export const formsStructure = {
  user,
  news,
};
