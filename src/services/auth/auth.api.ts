// src/services/auth/auth.api.ts

import { baseApi } from '../base.api'
import { MeResponse, LogInArgs, LogInResponse } from './auth.types'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<MeResponse, void>({
        query: () => ({
          url: `v1/auth/me`,
        }),
        providesTags: ['Me'],
      }),
      logIn: builder.mutation<LogInResponse, LogInArgs>({
        query: args => ({
          url: `/v1/auth/login`,
          body: args,
          method: 'POST',
        }),
        invalidatesTags: ['Me'],
      }),
      // logOut: builder.mutation<void, void>({
      //   query: () => ({
      //     url: `/v1/auth/logout`,
      //     method: 'POST',
      //   }),
      //   // invalidatesTags: ['Me'],
      // }),
    }
  },
})

export const { useMeQuery, useLogInMutation } = authApi
