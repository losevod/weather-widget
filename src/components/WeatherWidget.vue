<template>
  <user-location class="d-flex justify-content-center" v-if="weathers.length === 0"/>
  <div class="weather-widget m-3 border rounded shadow- p-2" v-if="weathers.length > 0">
    <div class="mainview-card d-flex justify-content-between" v-if="isMainView">
      <div class="locations-view">
        <main-view v-for="weather in weathers" :key="weather.id" :weather="weather"></main-view>
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-gear" class="fs-5 pe-2" role="button" @click="configureWidget" v-if="!isSavedOrder"/>
      </div>
    </div>
    <div class="settings-menu-view d-flex justify-content-between" v-if="!isMainView">
      <settings-menu v-if="!isMainView"></settings-menu>
      <button type="button" class="btn-close" aria-label="Close" @click="saveConfig"></button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import MainView from './MainView.vue'
import { weatherStore } from '@/stores/weatherStore'
import SettingsMenu from './SettingsMenu.vue'
import UserLocation from './UserLocation.vue';
import type { Ref } from 'vue'
import { Weather } from '@/models/weather';

export default defineComponent({
  name: 'WeatherWidget',
  components: {
     MainView, SettingsMenu, UserLocation
  },
  setup()
  {
    const isMainView: Ref<boolean> = ref(true)
    const store = weatherStore()
    const weathers: Ref<Weather[]> = computed(() => store.weathers)
    const isSavedOrder = ref(localStorage.getItem('savedOrder') ? true : false)

    onMounted(() => {
      store.checkLocalStorage()
    })
    function configureWidget() {
      if (!isSavedOrder.value)
        isMainView.value = !isMainView.value
      else alert('Clear the local storage or use another computer')
    }
    function saveConfig() {
      let arrayOfOrder = '' 
      weathers.value.forEach(element => {
        if (element !== weathers.value[weathers.value.length-1]) {
          arrayOfOrder+=element.name+','
        } else 
          arrayOfOrder+=element.name
      }) 
      localStorage.setItem('savedOrder', arrayOfOrder)
      isMainView.value = true
    }



    return { isMainView, weathers, configureWidget, saveConfig, isSavedOrder };
  }
});
</script>


<style scoped lang="scss">
.weather-widget {
  max-width: 275px;
}
.disabled {
  color: grey;
}

</style>
