// src/pages/DecksPage.tsx

import { DecksTable } from '@/pages/DecksTable'
import { ChangeEvent, useState } from 'react'
import { Button, Input, Pagination, PaginationProps, Sort } from '@/components'
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
  paginationSelectOptions: PaginationProps['selectOptions']
  initialPageSize: number
}

export function DecksPage({
  paginationSelectOptions = defaultPaginationOptions,
  initialPageSize = 5,
}: DecksPageProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [newCurrentPage, setNewCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(initialPageSize)

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
    <div style={{ width: '1006px', margin: '0 auto' }}>
      <Button
        variant={'primary'}
        disabled={isLoading}
        onClick={() => {
          createDeck({ name: '😼lalala' })
        }}
      >
        Add New Deck
      </Button>

      <Input
        value={searchParams.get('name') || undefined}
        onChange={inputOnChangeHandler}
        placeholder={'search'}
        label={'Search'}
        className={s.searchInput}
      />
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
        setPageSize={(pageSize) => setPageSize(pageSize)}
        selectOptions={paginationSelectOptions}
        defaultValue={paginationSelectOptions?.find((option) => +option.text === pageSize)?.value}
      />
    </div>
  )
}
