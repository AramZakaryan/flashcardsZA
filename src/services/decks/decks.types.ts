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
  author: Author
}

export type Author = {
  id: string
  name: string
}

export type GetDeckArgs = {
  deckId: string
}

export type GetDecksArgs = {
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: DecksOrderBy
}

export type DecksOrderBy = `${DeckKey}-${Direction}` | null
/** ZA: DeckKey is the name of column used on backend */
export type DeckKey = 'cardsCount' | 'updated' | 'name' | 'author.name' | 'created'
export type Direction = 'asc' | 'desc'

export type CreateDeckArgs = {
  cover?: File | null // in FormData
  name: string // min: 3  max: 30
  isPrivate?: boolean
}

export type DeleteDeckArgs = {
  id: string
}

export type CardsList = {
  pagination: Pagination
  items: Card[]
}

export type Card = {
  grade: number
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  created: string
  updated: string
}

export type GetCardsArgs = {
  id: string
  orderBy?: CardsOrderBy
  question?: string // min: 1, max: 30
  answer?: string // min: 1, max: 30
  currentPage?: number
  itemsPerPage?: number
}

export type CardsOrderBy = `${CardKey}-${Direction}` | null
/** ZA: CardKey is the name of column used on backend */
export type CardKey = 'question' | 'answer' | 'updated' | 'grade' | 'created'

export type MinMaxCardsCount = {
  max: number
  min: number
}
