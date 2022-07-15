import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const authSlice = createSlice({
  name: 'Auth',
  initialState: {
    isToken: false,
    test: 'Test',
    users: [],
    userLogin: null
  },
  reducers: {
    signUp(state, action) {
      state.users = [...state.users, action.payload]
    },
    signIn(state, action) {
      state.isToken = true
      state.userLogin = action.payload
      console.log('in Auth Reducer')
      console.log(state.userLogin)
    },
    signOut(state) { },
    findUsers(state, action) {
      state.users = action.payload
    }
  }
})

export const AuthActions = authSlice.actions

export default authSlice