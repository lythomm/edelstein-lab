<script setup>
import { ref, onMounted } from 'vue';
import Page from '../components/UI-Elements/Page.vue';

import supabase from '../supabase';

// const artists = ref([]);
const artists = [
  {
    name: 'dypler',
    src: 'artist1.jpg',
  },
  {
    name: 'edek',
    src: 'artist2.jpg',
  },
  // {
  //   name: 'Miscanti',
  //   src: 'artist3.jpg',
  // },
  // {
  //   name: 'Edel Shoulders',
  //   src: 'artist4.jpg',
  // },
];

const artistsImg = ['artist1.jpg', 'artist2.jpg', 'artist3.jpg', 'artist4.jpg'];

// onMounted(async () => {
//   try {
//     let { data } = await supabase.from('artists').select('name');
//     artists.value = data;
//     console.log(artists.value);
//   } catch (error) {
//     console.error(error);
//   }
// });
</script>

<template>
  <Page>
    <div class="h-screen pt-20">
      <h1 class="text-5xl text-center uppercase font-bold pb-12">Artistes</h1>
      <div class="flex justify-center items-center relative">
        <ul class="flex space-x-12 absolute top-1/2 left-1/2 -translate-x-1/4">
          <li
            v-for="(artist, index) in artists"
            :key="artist.id"
            class="relative flex justify-center cursor-pointer"
          >
            <img
              class="h-96 w-auto object-cover rounded-md"
              :src="`src/assets/images/home/${artist.src}`"
              style="filter: brightness(0.8)"
              :alt="artist.name"
            />
            <h2
              class="font-abrilFatFace text-3xl absolute -bottom-4 text-primary uppercase"
            >
              {{ artist.name }}
            </h2>
          </li>
        </ul>
      </div>
    </div>
  </Page>
</template>
