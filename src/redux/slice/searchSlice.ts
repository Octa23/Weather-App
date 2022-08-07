import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Results: [],
  loading: false,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.Results = action.payload
      state.loading = false
    },
    setLoading: (state) => {
      state.loading = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { setResults,setLoading } = searchSlice.actions

export default searchSlice.reducer