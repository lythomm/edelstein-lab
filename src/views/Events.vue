<script setup>
import { ref, onMounted } from 'vue';
import Page from '../components/UI-Elements/Page.vue';
import Section from '../components/UI-Elements/Section.vue';
import supabase from '../supabase';

// const events = ref([]);

const events = ref([
  {
    name: 'La Jungle',
    date: '2024-02-18',
    imgUrl: 'la-jungle.jpg',
    location: 'Peyrebazal, 11400 Les Brunels, France',
    start_time: '21:00',
  },
  {
    name: 'The Beggining',
    date: '2023-04-09',
    imgUrl: 'the-beginning.avif',
    location: 'Prunet, France',
    start_time: '21:00',
  },
  {
    name: 'La Montagne Noire',
    date: '2023-12-10',
    imgUrl: 'montagne-noire.avif',
    location: 'Domaine de peyrebazal, Les Brunels',
    start_time: '21:00',
  },
]);

// onMounted(async () => {
//   try {
//     let { data } = await supabase.from('events').select('*');
//     events.value = data;
//     console.log(events.value);
//   } catch (error) {
//     console.error(error);
//   }
// });

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'short', year: 'numeric' };

  // Utilisation de 'fr-FR' pour avoir le format français
  return date.toLocaleDateString('fr-FR', options);
}
</script>

<template>
  <Page>
    <div class="pt-20 container-default">
      <h1 class="text-5xl text-center uppercase font-bold pb-12">Events</h1>
      <ul class="grid grid-cols-2 gap-12">
        <li v-for="event in events" :key="event.id" class="cursor-pointer">
          <img
            class="mb-2"
            :src="`src/assets/images/events/${event.imgUrl}`"
            alt="la jungle"
          />
          <div class="flex flex-col">
            <h2 class="text-xl font-extrabold">
              {{ event.name }}
            </h2>
            <p class="text-gray-300">{{ event.location }}</p>
            <div class="flex space-x-2 items-center text-lg">
              <p class="text-secondary font-medium">
                {{ formatDate(event.date) }}
              </p>
              <p class="font-bold">|</p>
              <p class="text-secondary font-medium">
                {{ event.start_time }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Page>
</template>
