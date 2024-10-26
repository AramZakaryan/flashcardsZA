import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { clsx } from 'clsx'
import s from './table.module.scss'
import { ArrowIosDownOutline, ArrowIosUp, Body2span, Subtitle2span } from '@/components'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...restProps }, forwardedRef) => {
    return <table className={clsx(s.table, className)} {...restProps} ref={forwardedRef} />
  }
)
Table.displayName = 'Table'

export const THead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...restProps }, forwardedRef) => {
    return <thead className={clsx(s.thead, className)} {...restProps} ref={forwardedRef} />
  }
)
THead.displayName = 'THead'

export type Column = {
  /** ZA: key is the name of column used on backend */
  key: string
  title: string
  sortable?: boolean
}

export type Sort = {
  /** ZA: key is the name of column used on backend */
  key: string
  direction: 'asc' | 'desc'
} | null

export type THeadWithSortProps = {
  columns: Column[]
  onSort?: (sort: Sort) => void
  sort?: Sort
} & Omit<ComponentPropsWithoutRef<'thead'>, 'children'>

export const THeadWithSort = ({ columns, sort, onSort, ...restProps }: THeadWithSortProps) => {
  const handleSort = (column: Column): void => {
    if (!onSort || !column.sortable) return

    // ZA: Check if the clicked column is different from the currently sorted column
    if (column.key !== sort?.key) return onSort({ direction: 'asc', key: column.key })

    // ZA: If the current column is the same and the direction is ascending
    if (sort.direction === 'asc') return onSort({ direction: 'desc', key: column.key })

    // ZA: Reset the sort if the current column is the same and the direction is descending
    return onSort(null)
  }

  return (
    <THead {...restProps}>
      <Tr>
        {columns.map(column => (
          <Th key={column.key} onClick={() => handleSort(column)}>
            {column.title}
            {sort && (
              <div className={s.iconContainer}>
                {sort.key === column.key &&
                  (sort.direction === 'asc' ? (
                    <ArrowIosUp width={12} className={s.icon} />
                  ) : (
                    <ArrowIosDownOutline width={12} className={s.icon} />
                  ))}
              </div>
            )}
          </Th>
        ))}
      </Tr>
    </THead>
  )
}

export const TBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...restProps }, forwardedRef) => {
    return <tbody className={clsx(s.tbody, className)} {...restProps} ref={forwardedRef} />
  }
)
TBody.displayName = 'TBody'

export const Th = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, children, ...restProps }, forwardedRef) => {
    return (
      <th className={clsx(s.th, className)} {...restProps} ref={forwardedRef}>
        <Subtitle2span>{children}</Subtitle2span>
      </th>
    )
  }
)
Th.displayName = 'Th'

export const Tr = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...restProps }, forwardedRef) => {
    return <tr className={clsx(s.tr, className)} {...restProps} ref={forwardedRef} />
  }
)
Tr.displayName = 'Tr'

export const Td = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, children, ...restProps }, forwardedRef) => {
    return (
      <td className={clsx(s.td, className)} {...restProps} ref={forwardedRef}>
        <Body2span>{children}</Body2span>
      </td>
    )
  }
)
Td.displayName = 'Td'
