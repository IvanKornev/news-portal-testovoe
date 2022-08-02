interface NavbarButton {
  text: string;
  type: NavbarActionType;
}

interface NewsCardButton {
  text: string;
  isDanger: boolean;
}

const newsCard: NewsCardButton[] = [
  {
    text: "Редактировать",
    isDanger: false,
  },
  {
    text: "Удалить",
    isDanger: true,
  },
];

const navbar: NavbarButton[] = [
  {
    text: "Зарегистрироваться",
    type: "registration",
  },
  {
    text: "Авторизоваться",
    type: "authorization",
  },
];

export const buttons = {
  newsCard,
  navbar,
};
