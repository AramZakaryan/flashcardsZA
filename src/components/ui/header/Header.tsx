import s from './header.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import { clsx } from 'clsx'

export type HeaderProps = ComponentPropsWithoutRef<'header'>

export const Header = ({ className, children, ...restProps }: HeaderProps) => {
  return (
    <header className={clsx(s.header, className)} {...restProps}>
      <div className={s.headerContent}>{children}</div>
    </header>
  )
}
