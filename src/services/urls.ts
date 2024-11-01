export const URLS = {
  BASE_URL: `https://api.flashcards.andrii.es`,
  AUTH: {
    ME: '/v1/auth/me',
    LOG_IN: '/v1/auth/login',
    LOG_OUT: '/v2/auth/logout',
    REFRESH_TOKEN: '/v1/auth/refresh-token',
  },
  DECKS: {
    GET_DECKS: '/v2/decks',
    GET_MIN_MAX_CARDS: '/v2/decks/min-max-cards',
    GET_DECK: (id: string) => `/v1/decks/${id}`,
    CREATE_DECK: 'v1/decks',
    DELETE_DECK: (id: string) => `/v1/decks/${id}`,
    GET_CARDS: (id: string) => `/v1/decks/${id}/cards`,
  },
  CARDS: {
    GET_CARD: (id: number) => `/v1/cards/${id}`,
  },
}

export const METHODS = {
  DELETE: 'DELETE',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
} as const
