// src/pages/DecksPage.tsx

import { DecksTable } from '@/pages/decksPage/decksTable/DecksTable'
import { ChangeEvent, useState } from 'react'
import {
  Button,
  CreateDeck,
  CreateDeckValue,
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
import { DecksOrderBy } from '@/services/decks/decks.types'
import { useCreateDeckMutation, useGetDecksQuery, useGetMinMaxCardsQuery } from '@/services/decks'

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

  const [openCreateDeck, setOpenCreateDeck] = useState<boolean>(false)

  const DebouncedSearch = useDebounce(searchParams.get('name'), 400)

  const { data: minMaxCards } = useGetMinMaxCardsQuery()
  const { min: minCardsCount, max: maxCardsCount } = minMaxCards || {} // Safe destructuring (minMaxCards can be undefined)

  const {
    data,
    // isLoading: isDecksLoading,
    error,
  } = useGetDecksQuery({
    name: DebouncedSearch || undefined,
    currentPage: Number(searchParams.get('currentPage')) || 1,
    orderBy: (searchParams.get('sort') as DecksOrderBy) || null,
    minCardsCount: Number(searchParams.get('minCardsCount')) || minCardsCount,
    maxCardsCount: Number(searchParams.get('maxCardsCount')) || maxCardsCount,
    itemsPerPage: Number(searchParams.get('pageSize')) || initialPageSize,
  })

  const {
    items = [],
    pagination: { currentPage = 1, itemsPerPage = initialPageSize, totalItems = 1 } = {},
  } = data || {} // Safe destructuring (data and its properties can be undefined)

  const [createDeck, { isLoading, error: errorCreateDeck }] = useCreateDeckMutation()

  const createDeckHandler = async (data: CreateDeckValue) => {
    try {
      await createDeck(data)
      setOpenCreateDeck(false)
    } catch (error) {
      console.log(error)
    }
  }

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

  const sliderOnChangeHandler = (value: number[]) => {
    searchParams.set('minCardsCount', String(value[0]))
    searchParams.set('maxCardsCount', String(value[1]))
    searchParams.set('currentPage', '1')
    setSearchParams(searchParams)
  }

  const paginationOnPageChangeHandler = (page: number) => {
    searchParams.set('currentPage', String(page))
    setSearchParams(searchParams)
  }

  const paginationOnPageSizeChangeHandler = (pageSize: number) => {
    searchParams.set('pageSize', String(pageSize))
    setSearchParams(searchParams)
  }

  return (
    <div className={s.rootContainer}>
      <div className={s.headerContainer}>
        <H1span>Decks list</H1span>
        <Button variant={'primary'} disabled={isLoading} onClick={() => setOpenCreateDeck(true)}>
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
          min={minCardsCount}
          max={maxCardsCount}
          step={1}
          value={[
            Number(searchParams.get('minCardsCount')) || minCardsCount || 0,
            Number(searchParams.get('maxCardsCount')) || maxCardsCount || 99,
          ]}
          onValueChange={sliderOnChangeHandler}
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
        onChangePage={paginationOnPageChangeHandler}
        pageSize={itemsPerPage}
        totalCount={totalItems}
        className={s.pagination}
        setPageSize={paginationOnPageSizeChangeHandler}
        selectOptions={paginationSelectOptions}
        defaultValue={paginationSelectOptions?.find(option => +option.text === itemsPerPage)?.value}
      />
      <CreateDeck
        open={openCreateDeck}
        onOpenChange={setOpenCreateDeck}
        onClickPrimary={createDeckHandler}
      />
    </div>
  )
}
