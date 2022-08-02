<template>
  <header>
    <a-header
      title="Новостной портал"
      class="header"
      sub-title="ТЗ для работы"
      :ghost="false"
    >
      <template #extra>
        <h2 v-if="store.state.auth.wasAuthorized">Вы авторизованы</h2>
        <div v-else class="navbar__buttons">
          <a-button
            v-for="button in buttons.navbar"
            :key="button.type"
            @click="modals.open(button.type)"
            type="primary"
          >
            {{ button.text }}
          </a-button>
          <user-modal
            v-for="(value, name) in modals.wereOpened"
            :type="name"
            :key="name"
            :was-opened="value"
            @on-cancel="modals.close(name)"
          />
        </div>
      </template>
    </a-header>
  </header>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { buttons } from "@/constants";

import UserModal from "@/components/UserModal.vue";
import { PageHeader as AHeader } from "ant-design-vue";
import { useNavbarModals } from "../composition-hooks";

const modals = useNavbarModals();
const store = useStore();
</script>

<style lang="scss">
.ant-page-header {
  background: #000;
  padding: 1em 4em;
}

.navbar {
  &__buttons {
    display: flex;
    flex-direction: row;
    column-gap: 1em;
  }
}
</style>
