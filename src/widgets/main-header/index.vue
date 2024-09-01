<template>
  <header :class="styles.header">
    <Link
      v-for="link of LINKS"
      :key="link.path"
      :to="link.path"
      @click="navigateTo"
    >
      {{ link.title }}
    </Link>

    <Combobox
      v-model="defaultCurrency"
      placeholder="Выберите валюту"
      :options="CURRENCIES"
      :default-value="defaultCurrency"
    />
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import { Link, Combobox } from "shared/ui";
import { LINKS, CURRENCIES } from "shared/constants";
import { useCurrencyStore } from "features/currency";

import styles from "./styles.module.css";

const router = useRouter();
const { defaultCurrency } = storeToRefs(useCurrencyStore());

const navigateTo = (path: string): void => {
  router.push(path);
};
</script>
