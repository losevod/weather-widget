<template>
   <div class="input-group mt-5" style="width: 300px; margin-left: auto; margin-right: auto">
      <button class="btn btn-outline-primary" type="button" @click="locatorButtonPressed">Press to Request Data</button>
   </div>      
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { weatherStore } from '@/stores/weatherStore'

export default defineComponent({
   name: 'UserLocation',
   setup() {
      const store = weatherStore()
      const apiKey: string | null = localStorage.getItem('apiKey')

      function locatorButtonPressed() {
         navigator.geolocation.getCurrentPosition(
         async position => {
            if (apiKey)
            await store.fetchWeatherByLongitudeAndLatitude(position.coords.latitude, position.coords.longitude, apiKey)
         },
         error => {
            alert('Please agree to the use of geodata')
            console.log(error.message);
         },
         )
      }

      return { locatorButtonPressed }
   },
})
</script>
