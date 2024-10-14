// src/pages/DecksPage.tsx

import { useGetDecksQuery } from '@/services/flashcardsApi'
import { DecksTable } from '@/pages/DecksTable'
import { ChangeEvent, useState } from 'react'
import { Input, Pagination, Sort } from '@/components'
import s from './decksPage.module.scss'
import { useDebounce } from '@/hooks/useDebounce'
import { useSearchParams } from 'react-router-dom'
import { OrderBy } from '@/services/decks/decks.types'

export function DecksPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [newCurrentPage, setNewCurrentPage] = useState(1)

  const DebouncedSearch = useDebounce(searchParams.get('name'), 400)

  const { data, isLoading, error } = useGetDecksQuery({
    name: DebouncedSearch || undefined,
    currentPage: newCurrentPage,
    orderBy: (searchParams.get('sort') as OrderBy) || null,
  })

  // ZA: Safe destructuring (data and its properties can be undefined)
  const { items = [], pagination: { currentPage = 1, itemsPerPage = 0, totalItems = 0 } = {} } =
    data || {}

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
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
      />
    </div>
  )
}
