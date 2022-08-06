import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Results: [],
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.Results = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setResults } = searchSlice.actions

export default searchSlice.reducer