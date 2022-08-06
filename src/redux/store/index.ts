import { configureStore } from '@reduxjs/toolkit'
import searchSlice from '../slice/searchSlice'
import  weatherSlice  from '../slice/weatherSlice'
export const store = configureStore({
reducer: { search: searchSlice, weather: weatherSlice },
})