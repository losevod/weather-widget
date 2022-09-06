import axios, {
   AxiosInstance,
   AxiosRequestConfig
} from 'axios'
import { ApiResult } from '@/models/common'

const configuration: AxiosRequestConfig = {
   baseURL: process.env.VUE_APP_BASE_URL,
   responseType: 'json'
}

localStorage.setItem('apiKey', process.env.VUE_APP_API_KEY)

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