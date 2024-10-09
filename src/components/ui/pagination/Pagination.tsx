import { usePagination } from '@/hooks/usePagination'
import { ArrowIosBack, ArrowIosForward, Body2span, Select, SelectProps } from '@/components/ui'
import clsx from 'clsx'
import s from './pagination.module.scss'

type PaginationProps = {
  currentPage: number
  onChangePage: (page: number) => void
  setPageSize?: (pageSize: number) => void
  pageSize: number
  totalCount: number
} & {
  selectOptions?: SelectProps['options']
}

export const Pagination = ({
  currentPage,
  onChangePage,
  setPageSize,
  pageSize,
  totalCount,
  selectOptions,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    totalCount,
  })

  const handleClickBack = () => {
    onChangePage(currentPage - 1)
  }

  const handleClickForward = () => {
    onChangePage(currentPage + 1)
  }

  const handleSelectValueChange = (value: string) => {
    const selectedOption = selectOptions?.find((option) => option.value === value)
    const selectedPageSize = Number(selectedOption?.text)
    setPageSize?.(selectedPageSize)
  }

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === paginationRange[paginationRange.length - 1]

  return (
    <div className={clsx(s.paginationRootContainer)}>
      <div className={s.paginationContainer}>
        <button className={clsx(s.item, s.arrow)} disabled={isFirstPage} onClick={handleClickBack}>
          <ArrowIosBack width={16} />
        </button>

        {paginationRange.map((page, i) => {
          const isCurrentPage = page === currentPage
          const handleChangePage = () => {
            if (page !== '…') {
              onChangePage(page)
            }
          }
          return (
            <button
              key={i}
              className={clsx(s.item, { [s.dots]: page === '…' }, { [s.selected]: isCurrentPage })}
              onClick={handleChangePage}
            >
              <Body2span>{page}</Body2span>
            </button>
          )
        })}

        <button
          className={clsx(s.item, s.arrow)}
          disabled={isLastPage}
          onClick={handleClickForward}
        >
          <ArrowIosForward width={16} />
        </button>
      </div>

      {selectOptions && setPageSize && (
        <Body2span className={s.selectContainer}>
          show
          <Select isCompact onValueChange={handleSelectValueChange} options={selectOptions} />
          on page
        </Body2span>
      )}
    </div>
  )
}
