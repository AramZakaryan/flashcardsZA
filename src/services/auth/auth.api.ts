// src/services/auth/auth.api.ts

import { baseApi } from '../base.api'
import { MeResponse, LogInArgs, LogInResponse } from './auth.types'
import { METHODS, URLS } from '@/services'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<MeResponse, void>({
        query: () => ({
          url: URLS.AUTH.ME,
        }),
        providesTags: ['Me'],
      }),
      logIn: builder.mutation<LogInResponse, LogInArgs>({
        query: args => ({
          url: URLS.AUTH.LOG_IN,
          body: args,
          method: METHODS.POST,
        }),
        invalidatesTags: ['Me'],
      }),
      logOut: builder.mutation<void, void>({
        query: () => ({
          url: URLS.AUTH.LOG_OUT,
          method: METHODS.POST,
        }),
        // invalidatesTags: ['Me'],
      }),
    }
  },
})

export const { useMeQuery, useLazyMeQuery, useLogInMutation, useLogOutMutation } = authApi
