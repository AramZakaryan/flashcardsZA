// src/services/decks/cards.api.ts

import { baseApi } from '@/services/base.api'
import {
  CardsList,
  CreateDeckArgs,
  Deck,
  DecksList,
  DeleteDeckArgs,
  GetCardsArgs,
  GetDeckArgs,
  GetDecksArgs,
  MinMaxCardsCount,
} from './decks.types'
import { METHODS, URLS } from '@/services'

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksList, GetDecksArgs | void>({
        query: args => ({
          url: URLS.DECKS.GET_DECKS,
          params: args ?? undefined,
        }),
        providesTags: ['Decks'],
      }),
      getDeck: builder.query<Deck, GetDeckArgs>({
        query: args => ({
          url: URLS.DECKS.GET_DECK(args.deckId),
        }),
        providesTags: ['Decks'],
      }),
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        query: args => ({
          url: URLS.DECKS.CREATE_DECK,
          body: args,
          method: METHODS.POST,
        }),
        invalidatesTags: ['Decks'],
      }),
      deleteDeck: builder.mutation<Deck, DeleteDeckArgs>({
        query: args => ({
          url: URLS.DECKS.DELETE_DECK(args.id),
          method: METHODS.DELETE,
        }),
        invalidatesTags: ['Decks'],
      }),
      getCards: builder.query<CardsList, GetCardsArgs>({
        query: ({ id, ...args }) => ({
          url: URLS.DECKS.GET_CARDS(id),
          params: args ?? undefined,
        }),
        providesTags: ['Decks'],
      }),
      getMinMaxCards: builder.query<MinMaxCardsCount, void>({
        query: () => ({
          url: URLS.DECKS.GET_MIN_MAX_CARDS,
        }),
      }),
    }
  },
})

export const {
  useGetDecksQuery,
  useGetDeckQuery,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetCardsQuery,
  useGetMinMaxCardsQuery,
} = decksApi
