import Api from '@/services/api';
import { Weather } from '@/models/weather'
import { ApiResult } from '@/models/common';

class WeatherApi {
   public async getWeatherByCityName (cityName: string, apiKey: string): Promise<ApiResult<Weather>> {
      return await Api.get(`weather?q=${cityName}&appid=${apiKey}&units=metric`)
   }
   public async getWeatherByLongitudeAndLatitude (lat: number, lon: number, apiKey: string): Promise<ApiResult<Weather>> {
      return await Api.get(`weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
   }
}

export default new WeatherApi()