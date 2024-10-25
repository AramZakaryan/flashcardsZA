// src/services/auth/auth.slice.ts

import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    loggedIn: state => {
      state.isAuth = true
    },
    loggedOut: state => {
      state.isAuth = false
    },
  },
})

export const { loggedIn, loggedOut } = authSlice.actions
