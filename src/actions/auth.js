import { AuthActions } from "../store/reducers/auth"
import * as api from '../store/api'
import axios from 'axios'

const PLACES_URL = 'http://localhost:5000/api/places'
const USERS_URL = 'http://localhost:5000/api/users'

const LOGIN = 'LOGIN'
const SIGN_UP = 'SIGN_UP'

export const login = (email, password) => async (dispatch) => {
  // console.log(email, password)
  // TODO call API 
  const response = await fetch(
    `${USERS_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: password,
    })
  })
  const responseData = await response.json()
  console.log(responseData)
  // ? data from API will dispatch to reducers via payload
  // dispatch({ type: LOGIN, payload: { email, password } })
  dispatch(AuthActions.signIn({
    userId: responseData.userId,
    name: responseData.name,
    email: responseData.email,
    token: responseData.token,
  }))

}

export const signUp = (userDetails) => async (dispatch) => {
  // dispatch({ type: SIGN_UP, payload: userDetails })
  const { data } = await api.createUsers(userDetails)

  console.log(data)
  return data
}

export const fetchUsers = () => async dispatch => {
  // const response = await fetch(USERS_URL)
  const response = await axios.get(USERS_URL)
  const responseData = response.data
  // console.log(response)
  dispatch(AuthActions.findUsers(responseData))

}


export const logout = () => (dispatch) => { }