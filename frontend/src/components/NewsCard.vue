<template>
  <section class="news__card card">
    <a-card :loading="isLoading" :title="cardContent.title">
      <h4 class="card__author">Автор: {{ cardContent.author?.username }}</h4>
      <div>{{ cardContent.body }}</div>
      <template #extra>
        <div class="card__buttons">
          <a-button @click="helper.goBack" type="link">
            Вернуться обратно
          </a-button>
          <news-form
            action-type="updating"
            @on-submit="contentManager.update"
          />
          <a-button
            @click="contentManager.remove"
            type="primary"
            :disabled="wasChanged"
            danger
          >
            Удалить
          </a-button>
        </div>
      </template>
    </a-card>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

import api from "@/api";
import NewsForm from "@/components/NewsForm.vue";
import { useRouterHelper, useContentManager } from "@/composition-hooks";

const route = useRoute();
const helper = useRouterHelper();

const wasChanged: Ref<boolean> = ref(false);
const contentManager = useContentManager(() => {
  wasChanged.value = true;
  setTimeout(helper.goBack, 800);
});

const cardContent: Ref<any> = ref({});
const isLoading: Ref<boolean> = ref(true);
onMounted(async () => {
  await api.news.get(route.params.id).then((results) => {
    cardContent.value = results.data.news;
    isLoading.value = false;
  });
});
</script>

<style lang="scss">
.news {
  &__card {
    max-width: 50vw;
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
}
.card {
  &__author {
    font-weight: 700;
  }
  &__buttons {
    display: flex;
    flex-direction: row;
    column-gap: 1em;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}
</style>
