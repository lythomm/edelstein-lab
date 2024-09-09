<script setup>
import { ref, onMounted, computed } from 'vue';
import Page from '../components/UI-Elements/Page.vue';
import Section from '../components/UI-Elements/Section.vue';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from '../components/Home/AnimatedText.vue';

const locomotiveScroll = new LocomotiveScroll();

const heroBgImgRef = ref(null);
const artist1ImgRef = ref(null);
const selectedArtistRef = ref(null);
const showSelectedArtist = ref(false);

const phrases = [
  'Los Flamencos National Reserve',
  'is a nature reserve located',
  'in the commune of San Pedro de Atacama',
  'The reserve covers a total area',
  'of 740 square kilometres (290 sq mi)',
];
const artists = [
  {
    title: 'dypler',
    src: 'artist1.jpg',
  },
  {
    title: 'edek',
    src: 'artist2.jpg',
  },
  {
    title: 'Miscanti Lake',
    src: 'artist3.jpg',
  },
  {
    title: 'Lizarou',
    src: 'artist4.jpg',
  },
];
const selectedArtist = ref(artists[0]);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: document.documentElement,
      start: 'top',
      end: '+=500px',
      scrub: 1,
    },
  });

  timeline.from(heroBgImgRef.value, { clipPath: 'inset(15%)' });
});

function setSelectedArtist(index) {
  selectedArtist.value = artists[index];
  showSelectedArtist.value = true;
}
</script>

<template>
  <Page :spacing="false">
    <div class="flex justify-center relative w-full">
      <div
        ref="heroBgImgRef"
        style="height: 140vh; filter: brightness(0.6)"
        class="w-full absolute"
      >
        <img
          class="object-cover"
          src="../assets/images/home/party.jpg"
          alt="party"
        />
      </div>
      <div
        class="flex justify-center items-center relative"
        style="margin-top: 45vh"
      >
        <div
          ref="artist1ImgRef"
          data-scroll
          data-scroll-speed="0.3"
          class="absolute"
          style="filter: brightness(0.8); width: 350px; height: 475px"
        >
          <img src="../assets/images/home/artist1.jpg" alt="artist1" />
        </div>
        <h1
          class="absolute z-10 text-center text-8xl font-bold text-white uppercase whitespace-nowrap"
          data-scroll
          data-scroll-speed="0.7"
        >
          edelstein lab
        </h1>
      </div>
    </div>
    <div
      class="relative text-white text-5xl uppercase ml-20"
      style="margin-top: 30vw"
    >
      <div v-for="phrase in phrases" :key="phrase">
        <AnimatedText :text="phrase" />
      </div>
    </div>
    <div class="mt-80 mb-20 px-20 relative">
      <div
        v-if="showSelectedArtist"
        class="absolute -top-20 left-1/2 -translate-x-1/2 w-1/3 h-full z-10"
      >
        <img
          class="object-cover"
          :src="`src/assets/images/home/${selectedArtist.src}`"
          alt="artist"
        />
      </div>
      <div class="text-end uppercase font-bold pb-8 text-primary">
        <p>Les artistes</p>
      </div>
      <div
        class="border-t last-of-type:border-b border-white py-8 w-full text-end relative"
        v-for="(artist, index) in artists"
        :key="artist.title"
      >
        <span
          class="text-white uppercase text-5xl font-bold cursor-pointer"
          data-scroll
          data-scroll-speed="0.8"
          @mouseover="setSelectedArtist(index)"
          @mouseleave="showSelectedArtist = false"
          >{{ artist.title }}</span
        >
      </div>
    </div>
  </Page>
</template>
