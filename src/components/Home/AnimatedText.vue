<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const textRef = ref(null);
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  gsap.from(textRef.value, {
    scrollTrigger: {
      trigger: textRef.value,
      scrub: true,
      start: '0px bottom',
      end: 'bottom+=400px bottom',
    },
    opacity: 0,
    x: -200,
    ease: 'power3.out',
  });
});
</script>

<template>
  <p ref="textRef">{{ text }}</p>
</template>
