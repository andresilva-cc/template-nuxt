<script setup lang="ts">
const variants = useTextVariants();

interface TextProps {
  variant?: keyof typeof variants;
  element?: keyof HTMLElementTagNameMap;
}

const props = withDefaults(defineProps<TextProps>(), {
  variant: 'body',
  element: undefined,
});

const element = computed(() => {
  return props.element ?? variants[props.variant].element;
});

const classes = computed(() => {
  return variants[props.variant].classes;
});
</script>

<template>
  <component :is="element" :class="classes">
    <slot />
  </component>
</template>
