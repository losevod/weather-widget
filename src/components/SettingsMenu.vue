<template>
   <div class="settings-menu">
      <div class="d-flex justify-content-between mb-3">
        <span>Settings</span>
      </div>
      <draggable 
        v-model="weathers" 
        group="weathers" 
        @start="drag=true" 
        @end="updateWeathers" 
        item-key="id">
        <template #item="{element}">
          <div class="location-card d-flex justify-content-between p-2 mb-2" style="background-color: #E8E8E8">
            <div>
              <font-awesome-icon icon="fa-solid fa-bars" class="fs-5 pe-2" role="button"/>
              <span>{{element.name}}</span>
            </div>
            <font-awesome-icon icon="fa-regular fa-trash-can" class="fs-5" role="button" @click="deleteLocation(element)"/>
          </div>
        </template>
      </draggable>  
      <div class="add-location mt-3">
        <label class="form-label">Add Location</label>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="location..." aria-label="Server" v-model="cityName">
          <font-awesome-icon icon="fa-solid fa-arrow-turn-down" class="fs-5 p-2" role="button" @click="addLocation(cityName)" style="transform: rotate(90deg)"/>
        </div>
      </div>
    </div>
</template>


<script lang="ts">
   import { Weather } from '@/models/weather';
   import { weatherStore } from '@/stores/weatherStore';
   import { computed, defineComponent, ref, Ref, watch } from 'vue';
   import draggable from 'vuedraggable';
   
   export default defineComponent({
      name: 'SettingsMenu',
      components: {
         draggable
      },
      setup() {
         const store = weatherStore()
         const drag: Ref<boolean> = ref(false)
         const isMainView: Ref<boolean> = ref(false)
         const cityName: Ref<string> = ref('') 
         const apiKey: string | null = localStorage.getItem('apiKey') 
         const weathers: Ref<Weather[]> = ref(store.weathers)
         const computedWeathers: Ref<Weather[]> = computed(() => store.weathers)

         watch(computedWeathers, value => {
          weathers.value = value
         })

         function updateWeathers() {
          drag.value = false
          store.updateWeathers(weathers.value)
         }

         function deleteLocation(element: Weather): void {
            store.deleteWeathers(element)
         }
         async function addLocation(city: string): Promise<void> {
            if (city === '') {
              alert('Enter the name of the city!')
              return
            }
            if (apiKey) {
              await store.fetchWeatherByCityName(city, apiKey)
              cityName.value = ''
            }
         }

         return { deleteLocation, addLocation, drag, isMainView, cityName, weathers, updateWeathers };
      }
    });
   </script>