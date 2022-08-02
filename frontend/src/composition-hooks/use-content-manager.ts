import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { message } from "ant-design-vue";

import api from '@/api';
import { warnings } from "@/constants";

export const useContentManager = (onContentChanged: Function) => {
  const store = useStore();
  const route = useRoute();
  
  const userHasPermission = (): boolean => {
    if (!store.state.auth.wasAuthorized) {
      message.error(warnings.isAnonymousUser, 0.8);
      return false;
    }
    return true;
  }

  const update = async (form: any) => {
    if (userHasPermission()) {
      const { id } = route.params;
      await api.news.update(form, id).then(() => {
        onContentChanged()
      });
    }
  }
  
  const remove = async () => {
    if (userHasPermission()) {
      await api.news.remove(route.params.id).then(() => {
        onContentChanged();
      });
    }
  };

  const manager = {
    update,
    remove,
  };
  return manager;
};
