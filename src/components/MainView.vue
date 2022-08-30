<template>
   <div class="mainview mb-5">
      <div class="weather-card-mainview" v-if="weather">
         <div class="weather-card-title mb-3">
            <span class="fw-bold">{{ weather.name }}, {{ weather.sys.country }}</span>
         </div>
         <div class="weather-icon mb-3">
            <font-awesome-icon icon="fa-solid fa-cloud" class="pe-3 ps-5" style="font-size: 40px; color: grey;" v-if="weather.weather[0].main === 'Clouds'"/>
            <font-awesome-icon icon="fa-solid fa-sun" class="pe-3 ps-5" style="font-size: 40px; color: yellow" v-if="weather.weather[0].main === 'Clear'"/>
            <span style="font-size: 30px" class="align-top">{{ Math.round(weather.main.temp) }}&#8451;</span>
         </div>
         <div class="weather-description mb-3">
            <span class="pe-1">Feels like {{ Math.round(weather.main.feels_like) }}&#8451;.</span>
            <span>{{ weather.weather[0].description[0].toUpperCase() }}{{ weather.weather[0].description.substring(1) }}</span>
         </div>
         <div class="wind-description-and-pressure d-flex justify-content-between mb-2">
            <div class="wind-description">
               <font-awesome-icon icon="fa-solid fa-location-arrow" :style="{ transform: windDeg }" class="pe-2"/>
               <span>{{ Math.round(weather.wind.speed) }}.0 m/s {{ windDirection }}</span>
            </div>
            <div class="pressure">
               <font-awesome-icon icon="fa-brands fa-cloudscale" />
               <span class="ps-1">{{ weather.main.pressure }}hPa</span>
            </div>
         </div>
         <div class="humidity-dew-point d-flex justify-content-between mb-2">
            <div class="humidity">
               <span>Humidity: {{ weather.main.humidity }}%</span>
            </div>
            <div class="dew-point">
               <span class="ps-1">Dew point: 0&#8451;</span>
            </div>
         </div>
         <div class="visibility">
            <span>Visibility: {{ weather.visibility/1000 }}.0 km</span>
         </div>
      </div>   
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Ref } from 'Vue';

export default defineComponent({
   name: 'MainView',
   props: {
      weather: Object
   },
   setup(props) {
      const windDeg: Ref<string> = ref('')
      const windDirection: Ref<string> = ref('')
      if (props.weather) {
         windDeg.value = 'rotate('+(-45+props.weather.wind.deg)+'deg)'
         if (props.weather.wind.deg === 0 || props.weather.wind.deg === 360) windDirection.value = 'N'
         if (props.weather.wind.deg > 0 && props.weather.wind.deg < 45) windDirection.value = 'NNE'
         if (props.weather.wind.deg === 45) windDirection.value = 'NE'
         if (props.weather.wind.deg > 45 && props.weather.wind.deg < 90) windDirection.value = 'ENE'
         if (props.weather.wind.deg === 90) windDirection.value = 'E'
         if (props.weather.wind.deg > 90 && props.weather.wind.deg < 135) windDirection.value = 'ESE'
         if (props.weather.wind.deg === 135) windDirection.value = 'SE'
         if (props.weather.wind.deg > 135 && props.weather.wind.deg < 180) windDirection.value = 'SSE'
         if (props.weather.wind.deg === 180) windDirection.value = 'S'
         if (props.weather.wind.deg > 180 && props.weather.wind.deg < 225) windDirection.value = 'SSW'
         if (props.weather.wind.deg === 225) windDirection.value = 'SW'
         if (props.weather.wind.deg > 225 && props.weather.wind.deg < 270) windDirection.value = 'WSW'
         if (props.weather.wind.deg === 270) windDirection.value = 'W'
         if (props.weather.wind.deg > 270 && props.weather.wind.deg < 315) windDirection.value = 'WNW'
         if (props.weather.wind.deg === 315) windDirection.value = 'NW'
         if (props.weather.wind.deg > 315 && props.weather.wind.deg < 360) windDirection.value = 'NNW' 
      }
      
      return { windDeg, windDirection }
   }
 });
 </script>

 <style scoped lang="scss">
 </style>