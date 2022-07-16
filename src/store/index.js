import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import authSlice from './reducers/auth'
import productListSlice from './reducers/products'


const ReduxStore = configureStore({
  reducer: {
    auth: authSlice.reducer,
    productList: productListSlice.reducer
  },

})

export default ReduxStore