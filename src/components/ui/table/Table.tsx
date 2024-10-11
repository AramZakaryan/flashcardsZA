import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { clsx } from 'clsx'
import s from './table.module.scss'
import { Body2span, Subtitle2span } from '@/components'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...restProps }, forwardedRef) => {
    return <table className={clsx(className, s.table)} {...restProps} ref={forwardedRef} />
  }
)
Table.displayName = 'Table'

export const THead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...restProps }, forwardedRef) => {
    return <thead className={clsx(className, s.thead)} {...restProps} ref={forwardedRef} />
  }
)
THead.displayName = 'THead'

export const TBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...restProps }, forwardedRef) => {
    return <tbody className={clsx(className, s.tbody)} {...restProps} ref={forwardedRef} />
  }
)
TBody.displayName = 'TBody'

export const Th = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, children, ...restProps }, forwardedRef) => {
    return (
      <th className={clsx(className, s.th)} {...restProps} ref={forwardedRef}>
        <Subtitle2span>{children}</Subtitle2span>
      </th>
    )
  }
)
Th.displayName = 'Th'

export const Tr = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...restProps }, forwardedRef) => {
    return <tr className={clsx(className, s.tr)} {...restProps} ref={forwardedRef} />
  }
)
Tr.displayName = 'Tr'

export const Td = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, children, ...restProps }, forwardedRef) => {
    return (
      <td className={clsx(className, s.td)} {...restProps} ref={forwardedRef}>
        <Body2span>{children}</Body2span>
      </td>
    )
  }
)
Td.displayName = 'Td'
