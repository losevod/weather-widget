import { defineStore } from 'pinia'
import weatherApi from '@/services/api/weatherApi'
import { WeatherState } from '@/stores/weatherState'
import { Weather } from '@/models/weather'

export const weatherStore = defineStore('weather', {
   state: () => ({
      weathers: [],
      weather: null,
   } as WeatherState),
   actions: {
      async fetchWeatherByCityName(cityName: string, apiKey: string) {
         const { data, error } = await weatherApi.getWeatherByCityName(cityName, apiKey)
         if (error) console.log('Ошибка в получении погоды по названию города')
         if (data) {
            this.weather = data
            this.addWeathers(this.weather)
         }
      },
      async fetchWeatherByLongitudeAndLatitude(lat: number, lon: number, apiKey: string) {
         const { data, error } = await weatherApi.getWeatherByLongitudeAndLatitude(lat, lon, apiKey)
         if (error) console.log('Ошибка в получении погоды по координатам')
         if (data) {
            this.weather = data
            this.addWeathers(this.weather)
         }
      },
      addWeathers(weather: Weather) {
         if (this.weathers.length === 0 || !this.weathers?.find(element => element.id === weather.id)) {
            this.weathers?.push(weather)
         }
      },
      deleteWeathers(weather: Weather) {
         this.weathers.splice(this.weathers.indexOf(weather), 1)
      },
      updateWeathers(weathers: Weather[]) {
         this.weathers = weathers.slice(0)
      },
      checkLocalStorage() {
         const savedOrder: string | null = localStorage.getItem('savedOrder')
         if (savedOrder) {
            this.$reset()
            const apiKey = localStorage.getItem('apiKey')
            const arrayOfOrder = savedOrder.split(',')
            arrayOfOrder.forEach(async(element) => {
            if (apiKey)
               await this.fetchWeatherByCityName(element, apiKey)
        })
      }
      }
   }
}) 