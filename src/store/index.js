import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import authSlice from './reducers/auth'


const ReduxStore = configureStore({
  reducer: {
    auth: authSlice.reducer
  },

})

export default ReduxStore