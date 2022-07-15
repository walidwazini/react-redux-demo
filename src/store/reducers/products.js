import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constants/product'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: {},
    products: [],
    loading: false,
    errors: null,
  },
  reducers: {
    getProductList(state, action) {
      switch (action.type) {
        case PRODUCT_LIST_REQUEST:
          return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
          // console.log(action.payload)
          return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
          return { loading: false, errors: action.payload }
        default:
          return state
      }
    },
    getProductDetail(state, action) {
      switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
          return { ...state, loading: true }
        case PRODUCT_DETAILS_SUCCESS:
          console.log(action.payload)
          return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
          return { loading: false, errors: action.payload }
        default:
          return state
      }
    }
  },
})

export const productActions = productSlice.actions

export default productSlice