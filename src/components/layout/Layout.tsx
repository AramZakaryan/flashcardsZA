// src/components/layout/Layout.tsx

import s from './layout.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import { Header } from '@/components'
import { clsx } from 'clsx'
import { Outlet } from 'react-router-dom'
import { useMeQuery } from '@/services'

// type AuthContext = {
//   isAuthenticated: boolean
// }

export type LayoutProps = ComponentPropsWithoutRef<'div'>

export const Layout = ({ children, className, ...restProps }: LayoutProps) => {
  const { data, isError, isLoading } = useMeQuery()
  const isAuth = !isError && !isLoading

  const { avatar, name, email } = data || {}

  if (isLoading) return <h4>loading...</h4>

  return (
    <div className={clsx(s.layout, className)} {...restProps}>
      <Header avatar={avatar} name={name} email={email} />
      <div className={s.layoutContent}>
        <Outlet context={{ isAuth }} />
        {children}
      </div>
    </div>
  )
}
