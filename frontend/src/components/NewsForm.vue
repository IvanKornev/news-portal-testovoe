<template>
  <a-modal
    v-model:visible="formIsVisible"
    :title="modals.newsForm[actionType].title"
    @ok="onSubmit"
    cancel-text="Отменить"
  >
    <a-form layout="vertical" class="news__form formState">
      <a-form-item
        :label="field.label"
        v-for="field in formState"
        :key="field.label"
      >
        <a-input v-model:value="field.value" :placeholder="field.placeholder" />
      </a-form-item>
    </a-form>
  </a-modal>
  <a-button type="primary" @click="setFormVisibility(!formIsVisible)">
    {{ modals.newsForm[actionType].buttonText }}
  </a-button>
</template>

<script setup lang="ts">
import { useForm } from "@/composition-hooks";
import { modals } from "@/constants";
const { formState, formIsVisible, setFormVisibility } = useForm();

interface NewsFormProps {
  actionType: "adding" | "updating";
}
defineProps<NewsFormProps>();

const emit = defineEmits(["on-submit"]);
const onSubmit = (): void => {
  emit("on-submit", formState.value, setFormVisibility);
};
</script>
