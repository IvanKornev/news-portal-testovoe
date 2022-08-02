import { reactive } from "vue";

export const useNavbarModals = () => {
  interface ModalsStatus {
    authorization: boolean;
    registration: boolean;
  }
  const wereOpened: ModalsStatus = reactive({
    authorization: false,
    registration: false,
  });

  const open = (type: NavbarActionType): void => {
    wereOpened[type] = true;
  };
  const close = (type: NavbarActionType): void => {
    wereOpened[type] = false;
  };

  const modals = {
    wereOpened,
    open,
    close,
  };
  return modals;
};
