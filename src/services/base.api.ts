// src/services/base.api.ts

import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '@/services/baseQueryWithReauth'

export const baseApi = createApi({
  reducerPath: 'flashcardsApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Decks', 'Me'],
  endpoints: () => ({}),
})
