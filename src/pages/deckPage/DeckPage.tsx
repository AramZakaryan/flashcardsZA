import { useParams, useSearchParams } from 'react-router-dom'
import { CardsOrderBy, useGetCardsQuery, useGetDeckQuery } from '@/services'
import s from './deckPage.module.scss'
import {
  ArrowBackOutline,
  Body2span,
  Button,
  H1span,
  Input,
  Pagination,
  PaginationProps,
  Sort,
} from '@/components'
import { ChangeEvent, useState } from 'react'
import { CardsTable } from '@/pages/deckPage/cardsTable'

const defaultPaginationOptions = [
  { value: 'val1', text: '5' },
  { value: 'val2', text: '10' },
  { value: 'val3', text: '20' },
]

type DeckPageProps = {
  paginationSelectOptions?: PaginationProps['selectOptions']
  initialPageSize?: number
}

export const DeckPage = ({
  paginationSelectOptions = defaultPaginationOptions,
  initialPageSize = 5,
}: DeckPageProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [newCurrentPage, setNewCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(initialPageSize)

  const { deckId } = useParams()
  const { data: deckData } = useGetDeckQuery({ deckId })
  const { data: cardsData } = useGetCardsQuery({
    id: deckId || '',
    currentPage: newCurrentPage,
    orderBy: (searchParams.get('sort') as CardsOrderBy) || null,
    itemsPerPage: pageSize,
  })

  const inputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      searchParams.set('name', e.currentTarget.value)
      setSearchParams(searchParams)
    } else {
      searchParams.delete('name')
      setSearchParams(searchParams)
    }
  }

  const onSortHandler = (sort: Sort) => {
    if (sort) {
      searchParams.set('sort', sort ? `${sort?.key}-${sort?.direction}` : '')
      setSearchParams(searchParams)
    } else {
      searchParams.delete('sort')
      setSearchParams(searchParams)
    }
  }

  return (
    <>
      <div className={s.rootContainer}>
        <Button as={'a'} variant={'text'} href={'/forgotpass'} className={s.backToDecksList}>
          <ArrowBackOutline width={16} height={16} />
          <Body2span>Back to Decks List</Body2span>
        </Button>
        <div className={s.headerContainer}>
          <H1span>{deckData?.name}</H1span>
          <Button variant={'primary'} onClick={() => {}}>
            Learn Deck
          </Button>
        </div>
        <Input
          variant={'search'}
          value={searchParams.get('name') || undefined}
          onChange={inputOnChangeHandler}
          placeholder={'search'}
          className={s.searchInput}
        />
        <CardsTable
          cards={cardsData?.items}
          onSort={onSortHandler}
          sort={
            searchParams.get('sort')
              ? ({
                  key: searchParams.get('sort')?.split('-')[0],
                  direction: searchParams.get('sort')?.split('-')[1],
                } as Sort)
              : null
          }
        />
        <Pagination
          currentPage={cardsData?.pagination.currentPage || 1}
          onChangePage={setNewCurrentPage}
          pageSize={cardsData?.pagination.itemsPerPage || pageSize}
          totalCount={cardsData?.pagination.totalItems || 1}
          className={s.pagination}
          setPageSize={pageSize => setPageSize(pageSize)}
          selectOptions={paginationSelectOptions}
          defaultValue={paginationSelectOptions?.find(option => +option.text === pageSize)?.value}
        />
      </div>
    </>
  )
}
