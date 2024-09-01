<template>
  <RouterLink
    :class="linkClasses"
    :to="props.to"
    @click="onClick(props.to as string)"
  >
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import { type RouterLinkProps, useRoute } from "vue-router";
import { computed } from "vue";

import styles from "./styles.module.css";

type LinkEmits = {
  click: [value: string];
};

const emits = defineEmits<LinkEmits>();
const props = defineProps<RouterLinkProps>();
const route = useRoute();

const linkClasses = computed((): string[] => {
  const classes: string[] = [styles.link];

  if (route.path === (props.to === "/" ? props.to : `/${props.to}`))
    classes.push(styles.active);
  return classes;
});

const onClick = (to: string): void => {
  emits("click", to);
};
</script>
