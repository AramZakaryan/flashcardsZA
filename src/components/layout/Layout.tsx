// src/components/layout/Layout.tsx

import s from './layout.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import { Header } from '@/components'
import { clsx } from 'clsx'
import { Outlet } from 'react-router-dom'
import { useMeQuery } from '@/services'
import { useAppDispatch } from '@/services'
import { loggedIn, loggedOut } from '@/services'

export type LayoutProps = ComponentPropsWithoutRef<'div'>

// ZA: this components may be changed according to the Header changes
export const Layout = ({ children, className, ...restProps }: LayoutProps) => {
  const dispatch = useAppDispatch()

  const { data, isError, isLoading } = useMeQuery()
  const isData = !isError && !isLoading

  const { avatar, name, email } = data || {}

  if (isData) {
    dispatch(loggedIn())
  } else {
    dispatch(loggedOut())
  }

  if (isLoading) return <h4>loading...</h4>

  return (
    <div className={clsx(s.layout, className)} {...restProps}>
      <Header avatar={avatar} name={name} email={email} />
      <div className={s.layoutContent}>
        <Outlet />
        {children}
      </div>
    </div>
  )
}
