<template>
  <a-modal
    v-model:visible="wasOpened"
    :title="modals.navbar[type].title"
    :ok-text="modals.navbar[type].buttonText"
    @ok="onSubmit(type)"
    @cancel="onCancel"
    cancel-text="Отменить"
  >
    <a-form layout="vertical">
      <div class="modal__fields_user fields">
        <a-form-item
          :label="field.label"
          class="fields__field"
          v-for="(field, name) in form"
          :key="field.label"
        >
          <a-input v-model:value="form[name].value" :type="field.type" />
        </a-form-item>
      </div>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";

import { formsStructure, modals } from "@/constants";
import type { AuthModule } from "@/api/interfaces";

interface UserModalProps {
  type: NavbarActionType;
  wasOpened: boolean;
}
defineProps<UserModalProps>();
const form = reactive(formsStructure.user);
const store = useStore();

const emit = defineEmits(["on-cancel"]);
const onCancel = (): void => {
  emit("on-cancel");
};
const onSubmit = async (type: NavbarActionType): Promise<void> => {
  const methodName = type as keyof AuthModule;
  await store.dispatch(`auth/${methodName}`, form);
};
</script>
