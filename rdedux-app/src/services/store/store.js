import { configureStore } from '@reduxjs/toolkit'
import getSlice from '../store/slices/get_user_slice'

export const store = configureStore({
  reducer: {
    getReadApi: getSlice
  },
})

export default store;
