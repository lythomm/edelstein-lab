<script setup>
import Icon from './UI-Elements/Icon.vue';
</script>

<template>
  <header class="bg-black text-white fixed w-full z-30">
    <div class="px-default flex justify-between items-center py-default">
      <router-link to="/" class="text-white">
        <h1 class="text-2xl font-bold">EDELSTEIN LAB</h1>
      </router-link>
      <nav class="absolute left-1/2 -translate-x-1/2">
        <ul class="flex space-x-default">
          <li>
            <router-link to="/artists" class="text-white">Artistes</router-link>
          </li>
          <li>
            <router-link to="/events" class="text-white"
              >Évènements
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="text-white">Contact </router-link>
          </li>
        </ul>
      </nav>
      <div class="space-x-default">
        <a href="https://www.instagram.com/edelsteinlab/" target="_blank">
          <Icon icon="instagram" icon-type="fab" />
        </a>
        <a
          href="https://open.spotify.com/intl-fr/artist/5Xb2l3eZtfBqinathBKfOi?si=dh89SIekRn-4W4783D_tiA"
          target="_blank"
        >
          <Icon icon="spotify" icon-type="fab" />
        </a>
      </div>
    </div>
  </header>
</template>
