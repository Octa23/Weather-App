import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedWeather: {},
  preference: 0,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherInfo: (state, action) => {
      state.selectedWeather = action.payload;
    },
    changePreference: (state,action) => {
      state.preference = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWeatherInfo, changePreference } = weatherSlice.actions;

export default weatherSlice.reducer;
