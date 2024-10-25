// src/services/decks/decks.api.ts

import { baseApi } from '@/services/base.api'
import {
  CreateDeckArgs,
  Deck,
  DecksList,
  DeleteDeckArgs,
  GetDeckArgs,
  GetDecksArgs,
} from './decks.types'

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksList, GetDecksArgs | void>({
        query: args => ({
          url: `v2/decks`,
          params: args ?? undefined,
        }),
        providesTags: ['Decks'],
      }),
      getDeck: builder.query<Deck, GetDeckArgs | void>({
        query: args => ({
          url: `/v1/decks/${args?.deckId}`,
        }),
        providesTags: ['Decks'],
      }),
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        query: args => ({
          url: `v1/decks`,
          body: args,
          method: 'POST',
        }),
        invalidatesTags: ['Decks'],
      }),
      deleteDeck: builder.mutation<Deck, DeleteDeckArgs>({
        query: args => ({
          url: `v1/decks/${args?.id}`,
          // body: args,
          method: 'DELETE',
        }),
        invalidatesTags: ['Decks'],
      }),
    }
  },
})

export const { useGetDecksQuery, useGetDeckQuery, useCreateDeckMutation, useDeleteDeckMutation } =
  decksApi