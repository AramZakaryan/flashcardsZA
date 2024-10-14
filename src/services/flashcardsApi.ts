// src/services/flashcardsApi.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DecksListResponse, GetDecksArgs } from '@/services/decks/decks.types'

export const flashcardsApi = createApi({
  reducerPath: 'flashcardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: (builder) => {
    return {
      getDecks: builder.query<DecksListResponse, GetDecksArgs | void>({
        query: (args) => ({
          url: `v2/decks`,
          params: args ?? undefined,
        }),
      }),
    }
  },
})

export const { useGetDecksQuery } = flashcardsApi
