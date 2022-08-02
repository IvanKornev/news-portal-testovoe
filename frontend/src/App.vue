<template>
  <the-header />
  <main class="page">
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import TheHeader from "@/components/TheHeader.vue";

const store = useStore();
onMounted(() => {
  const tokenIsExist = localStorage.getItem("token");
  if (tokenIsExist) {
    store.commit("auth/setAuthorizeStatus", true);
  }
});
</script>

<style lang="scss">
.page {
  padding: 1em 4em;
}
</style>
