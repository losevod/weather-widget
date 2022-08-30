import axios, {
   AxiosInstance,
   AxiosRequestConfig
} from 'axios'
import { ApiResult } from '@/models/common'

const configuration: AxiosRequestConfig = {
   baseURL: 'https://api.openweathermap.org/data/2.5',
   responseType: 'json'
}

localStorage.setItem('apiKey', '9553b20897172e725cd19ee8b0102a27')

class Api {
   private axios: AxiosInstance;

   constructor () {
      this.axios = axios.create(configuration)
   }

   public async get<T> (url: string, params?: object): Promise<ApiResult<T>> {
      return this.axios.get(url, { params })
   }
}

export default new Api()