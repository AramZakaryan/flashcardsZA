export type DecksList = {
  items: Deck[]
  pagination: Pagination
  maxCardsCount: number
}

export type Pagination = {
  totalItems: number
  currentPage: number
  itemsPerPage: number
  totalPages: number
}

export type Deck = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover?: string
  created: string
  updated: string
  cardsCount: number
  author: User
}

export type User = {
  id: string
  name: string
}

export type GetDeckArgs = {
  deckId?: string
}

export type GetDecksArgs = {
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: OrderBy
}

export type OrderBy = `${Key}-${Direction}` | null
/** ZA: Key is the name of column used on backend */
export type Key = 'cardsCount' | 'updated' | 'name' | 'author.name' | 'created' | null
export type Direction = 'asc' | 'desc'

export type CreateDeckArgs = {
  cover?: File | null // in FormData
  name: string // min: 3  max: 30
  isPrivate?: boolean
}

export type DeleteDeckArgs = {
  id: string
}
