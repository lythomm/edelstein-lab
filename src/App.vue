<script setup>
import Header from './components/Header.vue';
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

function isMobileDevice() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}
</script>

<template>
  <main role="main" class="bg-black">
    <div
      v-if="isMobileDevice()"
      class="flex flex-col justify-center items-center h-screen space-y-4 px-10 text-center"
    >
      <h1 class="text-4xl uppercase font-bold">edelstein lab</h1>
      <p>Ce site n'est pas accessible sur téléphone pour le moment.</p>
      <p class="font-abrilFatFace">Nous en sommes navrés.</p>
    </div>
    <div v-else>
      <Header />
      <router-view />
    </div>
  </main>
</template>
