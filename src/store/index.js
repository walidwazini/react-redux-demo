import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import authSlice from './reducers/auth'
import productSlice from './reducers/products'


const ReduxStore = configureStore({
  reducer: {
    auth: authSlice.reducer,
    product: productSlice.reducer
  },

})

export default ReduxStore