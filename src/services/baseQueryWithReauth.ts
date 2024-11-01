// src/services/auth/auth.api.ts

import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'
import { privateRoutes, router } from '@/routes/Router'
import { matchPath } from 'react-router-dom'
import { METHODS, URLS } from './urls'
import { ROUTES } from '@/routes'

const baseQuery = fetchBaseQuery({
  baseUrl: URLS.BASE_URL,
  credentials: 'include',
  // prepareHeaders: headers => {
  // headers.append('x-auth-skip', 'true')
  // },
})

const mutex = new Mutex()

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire() // lock the mutex
      try {
        // try to get a new token
        const refreshResult = await baseQuery(
          { url: URLS.AUTH.REFRESH_TOKEN, method: METHODS.POST },
          api,
          extraOptions
        )

        if (refreshResult.meta?.response?.status === 204) {
          // retry the initial query
          result = await baseQuery(args, api, extraOptions) // retry the initial query
        } else {
          const isPrivateRoute = privateRoutes.find(route =>
            matchPath(route.path ?? '', window.location.pathname)
          )

          if (isPrivateRoute) {
            void router.navigate(ROUTES.LOG_IN)
          }
        }
      } finally {
        release() // unlock the mutex
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}
