import { defineStore } from "pinia";
import { ref } from "vue";

import { DEFAULT_CURRENCY } from "shared/constants";
import { Currencies } from "shared/types";
import type { Currency } from "./types";

export const useCurrencyStore = defineStore(
  "currency",
  () => {
    const currencies = ref<Currency[]>([]);
    const defaultCurrency = ref<Currencies>(DEFAULT_CURRENCY);

    const setDefaultCurrency = (currency: Currencies): void => {
      defaultCurrency.value = currency;
    };

    return {
      currencies,
      defaultCurrency,
      setDefaultCurrency,
    };
  },
  {
    persist: {
      key: "defaultCurrency",
      paths: ["defaultCurrency"],
      storage: localStorage,
    },
  }
);
