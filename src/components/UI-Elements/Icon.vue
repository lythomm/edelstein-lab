<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, fab, far);

defineProps({
  icon: {
    type: String,
    default: null,
  },
  iconType: {
    type: String,
    default: 'fas',
  },
});
</script>

<template>
  <FontAwesomeIcon :icon="[iconType, icon]" class="size-5" />
</template>
