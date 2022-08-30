<template>
  <WeatherWidget />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WeatherWidget from './components/WeatherWidget.vue';

export default defineComponent({
  name: 'App',
  components: {
    WeatherWidget
  }
});
</script>

<style lang="scss">
</style>
