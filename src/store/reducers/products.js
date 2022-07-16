import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
// import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constants/product'

const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    products: [],
    loading: false,
    errors: null,
  },
  reducers: {
    request(state, action) {
      state.loading = true
      state.products = []
    },
    success(state, action) {
      // ? need to make if fetching fail or loading
      console.log(action)
      state.loading = false
      state.products = action.payload
    },
    fail(state, action) {
      state.loading = false
      state.errors = action.payload
    }
  },
})

export const productListActions = productListSlice.actions


export default productListSlice