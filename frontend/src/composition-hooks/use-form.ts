import { ref, reactive } from "vue";
import type { Ref } from "vue";
import { useStore } from "vuex";

import { message } from "ant-design-vue";
import { formsStructure, warnings } from "@/constants";

export const useForm = () => {
  const store = useStore();

  const formIsVisible: Ref<boolean> = ref(false);
  const formState: Ref<any> = ref(formsStructure.news);

  const setFormVisibility = (status: boolean): void => {
    if (store.state.auth.wasAuthorized) {
      formIsVisible.value = status;
      return;
    }
    message.error(warnings.isAnonymousUser, 0.8);
  };

  return {
    formState,
    setFormVisibility,
    formIsVisible,
  };
};
