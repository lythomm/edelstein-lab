<script setup>
defineProps({
  fullWidth: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    default: undefined,
  },
  bgImgFixed: {
    type: Boolean,
    default: false,
  },
  hScreen: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <section
    class="space-y-2default p-2default"
    :class="{
      'container-default': !fullWidth,
      'bg-cover bg-center -mx-default py-default px-default': image,
      'bg-fixed': bgImgFixed,
      'h-screen': hScreen,
    }"
    :style="
      image
        ? 'background-image:linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.1)),url(' +
          image +
          ');'
        : ''
    "
  >
    <slot></slot>
  </section>
</template>
