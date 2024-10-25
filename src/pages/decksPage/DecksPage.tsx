// src/pages/DecksPage.tsx

import { DecksTable } from '@/pages/decksPage/decksTable/DecksTable'
import { ChangeEvent, useState } from 'react'
import {
  Button,
  H1span,
  Input,
  Pagination,
  PaginationProps,
  Slider,
  Sort,
  Tabs,
  TrashOutline,
} from '@/components'
import s from './decksPage.module.scss'
import { useDebounce } from '@/hooks/useDebounce'
import { useSearchParams } from 'react-router-dom'
import { OrderBy } from '@/services/decks/decks.types'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks'

const defaultPaginationOptions = [
  { value: 'val1', text: '5' },
  { value: 'val2', text: '10' },
  { value: 'val3', text: '20' },
]

type DecksPageProps = {
  paginationSelectOptions?: PaginationProps['selectOptions']
  initialPageSize?: number
}

export function DecksPage({
  paginationSelectOptions = defaultPaginationOptions,
  initialPageSize = 5,
}: DecksPageProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [newCurrentPage, setNewCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [sliderValue, setSliderValue] = useState([0, 12])

  const DebouncedSearch = useDebounce(searchParams.get('name'), 400)

  const {
    data,
    // isLoading: isDecksLoading,
    error,
  } = useGetDecksQuery({
    name: DebouncedSearch || undefined,
    currentPage: newCurrentPage,
    orderBy: (searchParams.get('sort') as OrderBy) || null,
    itemsPerPage: pageSize,
  })

  // console.log(data)

  // const { data: dataGetDeck } = useGetDeckQuery({
  //   deckId: 'cm2acz32g03g1jq016ldg154e',
  // })

  // if (dataGetDeck) {
  //   console.log(dataGetDeck)
  // }

  // ZA: Safe destructuring (data and its properties can be undefined)
  const {
    items = [],
    pagination: { currentPage = 1, itemsPerPage = pageSize, totalItems = 1 } = {},
  } = data || {}

  const [createDeck, { isLoading, error: errorCreateDeck }] = useCreateDeckMutation()

  // if (isDecksLoading) {
  //   return <h1>Loading...</h1>
  // }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  if (errorCreateDeck) {
    return <div>Error: {JSON.stringify(errorCreateDeck)}</div>
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

  const inputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      searchParams.set('name', e.currentTarget.value)
      setSearchParams(searchParams)
    } else {
      searchParams.delete('name')
      setSearchParams(searchParams)
    }
  }

  return (
    <div className={s.rootContainer}>
      <div className={s.headerContainer}>
        <H1span>Decks list</H1span>
        <Button
          variant={'primary'}
          disabled={isLoading}
          onClick={() => {
            createDeck({ name: '😼lalala' })
          }}
        >
          Add New Deck
        </Button>
      </div>
      <div className={s.filterContainer}>
        <Input
          variant={'search'}
          value={searchParams.get('name') || undefined}
          onChange={inputOnChangeHandler}
          placeholder={'search'}
          className={s.searchInput}
        />
        <Tabs
          label={'Show decks cards'}
          options={[
            { value: 'myDecks', text: 'My Decks' },
            { value: 'allDecks', text: 'All Decks' },
          ]}
        />
        <Slider
          label={'Number of cards'}
          min={0}
          max={12}
          step={1}
          value={sliderValue}
          onValueChange={setSliderValue}
        />
        <Button variant={'secondary'} onClick={() => {}}>
          <TrashOutline width={16} />
          Clear filter
        </Button>
      </div>
      <DecksTable
        decks={items}
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
        currentPage={currentPage}
        onChangePage={setNewCurrentPage}
        pageSize={itemsPerPage}
        totalCount={totalItems}
        className={s.pagination}
        setPageSize={pageSize => setPageSize(pageSize)}
        selectOptions={paginationSelectOptions}
        defaultValue={paginationSelectOptions?.find(option => +option.text === pageSize)?.value}
      />
    </div>
  )
}
