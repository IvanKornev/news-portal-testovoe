<template>
  <section class="news__list list">
    <a-list
      :loading="isLoading"
      :bordered="true"
      class="list__wrapper"
      :locale="warnings.newsList"
      item-layout="horizontal"
    >
      <a-list-item v-for="currentNews in news.list" :key="news._id">
        <a-list-item-meta :description="string.cut(currentNews.body, 40)">
          <template #title>
            <h2>{{ currentNews.title }}</h2>
          </template>
          <template #avatar>
            <a-avatar size="large" style="background-color: #1890ff">
              {{ string.getFirstLetter(currentNews.author.username) }}
            </a-avatar>
          </template>
        </a-list-item-meta>
        <template #actions>
          <a-button @click="helper.goToNews(currentNews._id)" type="ghost">
            Смотреть
          </a-button>
        </template>
      </a-list-item>
    </a-list>
    <div class="list__actions">
      <news-form @on-submit="addNews" action-type="adding" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import type { Ref } from "vue";
import { useStore } from "vuex";

import NewsForm from "@/components/NewsForm.vue";
import { warnings } from "@/constants";
import { string } from "@/utils";
import { useRouterHelper } from "@/composition-hooks";

const helper = useRouterHelper();
const store = useStore();

const news = computed(() => store.state.news);
const isLoading: Ref<boolean> = ref(true);
onMounted(async (): Promise<void> => {
  store.dispatch("news/getAll").then(() => {
    isLoading.value = false;
  });
});

const addNews = (form: any, visibilityCallback: Function) => {
  store.dispatch("news/addNews", form).then(() => {
    visibilityCallback(false);
  });
};
</script>

<style lang="scss">
.list {
  &__actions {
    margin-top: 1.5em;
  }

  &__wrapper {
    max-width: 40vw;

    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
}
</style>
