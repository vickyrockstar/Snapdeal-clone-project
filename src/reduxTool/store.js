import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './validSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})