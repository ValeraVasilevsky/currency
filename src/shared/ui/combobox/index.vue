<template>
  <ComboboxRoot
    v-model="selectedItem"
    :class="styles.root"
    :defaultValue="props.defaultValue"
    :displayValue="(v) => v.toUpperCase()"
  >
    <ComboboxAnchor as-child>
      <ComboboxTrigger :class="styles.trigger">
        <ComboboxInput
          readonly
          :class="styles.input"
          :placeholder="props.placeholder"
        />
        <Icon icon="radix-icons:chevron-down" :class="styles.icon" />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxContent :class="styles.content" disable-outside-pointer-events>
      <ComboboxItem
        v-for="item of props.options"
        :key="String(item.value)"
        :value="item.value"
        :class="styles.item"
        @click="onSelect(item.value)"
      >
        {{ item.title }}
      </ComboboxItem>
    </ComboboxContent>
  </ComboboxRoot>
</template>

<script setup lang="ts">
import {
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxRoot,
  ComboboxTrigger,
} from "radix-vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

import { CurrenciesItem } from "../../types";

import styles from "./styles.module.css";

type ComboboxEmits = {
  "update:model-value": [value: string];
};
interface ComboboxProps {
  modelValue: string;
  placeholder: string;
  options: CurrenciesItem[];
  defaultValue?: string;
}

const emits = defineEmits<ComboboxEmits>();
const props = defineProps<ComboboxProps>();

const selectedItem = ref<string>(props.modelValue);

const onSelect = (value: string): void => {
  selectedItem.value = value;
  emits("update:model-value", selectedItem.value);
};
</script>
