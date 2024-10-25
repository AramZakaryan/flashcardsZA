// src/services/store.ts

import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from './base.api'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { authSlice } from '@/services/auth/auth.slice'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
