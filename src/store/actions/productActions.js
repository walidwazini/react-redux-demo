import axios from 'axios'
import { productListActions } from '../reducers/products'

const product_url = 'http://localhost:5000/api/products'

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch(productListActions.request())

    const { data } = await axios.get(product_url)
    // dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    dispatch(productListActions.success(data))
  } catch (err) {
    const message = err.response && err.response.data.message
      ? err.response.data.message
      : err.message;
    console.log(err)
    dispatch(productListActions.fail(message))
  }
}