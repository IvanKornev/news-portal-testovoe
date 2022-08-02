import { useRouter } from "vue-router";

export const useRouterHelper = () => {
  const router = useRouter();

  const goToNews = (id: string | string[]): void => {
    const params = { id };
    router.push({ name: "selectedNews", params });
  };
  const goBack = () => {
    router.go(-1);
  };

  const helper = {
    goToNews,
    goBack,
  };
  return helper;
};
