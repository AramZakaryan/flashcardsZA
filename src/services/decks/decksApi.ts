// src/services/decks/decksApi.ts

import { baseApi } from '@/services/baseApi'
import {
  CreateDeckArgs,
  Deck,
  DecksListResponse,
  DeleteDeckArgs,
  GetDecksArgs,
} from '@/services/decks/decks.types'

export const decksApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getDecks: builder.query<DecksListResponse, GetDecksArgs | void>({
        query: (args) => ({
          url: `v2/decks`,
          params: args ?? undefined,
        }),
        providesTags: ['Decks'],
      }),
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        query: (args) => ({
          url: `v1/decks`,
          body: args,
          method: 'POST',
        }),
        invalidatesTags: ['Decks'],
      }),
      deleteDeck: builder.mutation<Deck, DeleteDeckArgs>({
        query: (args) => ({
          url: `v1/decks/${args?.id}`,
          // body: args,
          method: 'DELETE',
        }),
        invalidatesTags: ['Decks'],
      }),
    }
  },
})

export const { useGetDecksQuery, useCreateDeckMutation, useDeleteDeckMutation } = decksApi
