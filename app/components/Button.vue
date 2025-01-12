<script setup lang="ts">
interface ButtonProps {
  to?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  to: undefined,
});

const component = computed(() => {
  if (props.to) {
    return {
      tag: resolveComponent('NuxtLink'),
      attributes: {
        to: props.to,
      },
    };
  }

  return {
    tag: 'button',
    attributes: {
      type: 'button',
    },
  };
});

const variants = useTextVariants();
</script>

<template>
  <component
    :is="component.tag"
    v-bind="component.attributes"
    :class="variants.body.classes"
    class="inline-block rounded px-4 py-2 font-medium transition-colors bg-slate-700 hover:opacity-90 active:opacity-80"
  >
    <slot />
  </component>
</template>
