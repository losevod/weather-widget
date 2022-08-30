import { Weather } from '@/models/weather'

export interface WeatherState {
   weathers: Weather[];
   weather: Weather | null;
}