import s from './layout.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import { Header } from '@/components'
import { clsx } from 'clsx'
import { Outlet } from 'react-router-dom'

export type LayoutProps = ComponentPropsWithoutRef<'div'>

// ZA: this components will be changes according to the Header change
export const Layout = ({ children, className, ...restProps }: LayoutProps) => {
  return (
    <div className={clsx(s.layout, className)} {...restProps}>
      <Header />
      <div className={s.layoutContent}>
        <Outlet />
        {children}
      </div>
    </div>
  )
}
