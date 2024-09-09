<script setup>
defineProps({
  spacing: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <main role="main">
    <div :class="{ 'space-y-2default': spacing }">
      <slot></slot>
    </div>
  </main>
</template>
