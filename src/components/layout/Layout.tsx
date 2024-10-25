import s from './layout.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import { Header } from '@/components'
import { clsx } from 'clsx'
import { Outlet } from 'react-router-dom'
import { useMeQuery } from '@/services/auth'

export type LayoutProps = ComponentPropsWithoutRef<'div'>

// type AuthContext = {
//   isAuth: boolean
// }

// ZA: this components may be changed according to the Header changes
export const Layout = ({ children, className, ...restProps }: LayoutProps) => {
  const { data, isError, isLoading } = useMeQuery(undefined, { skip: true })
  const isAuth = !isError && isLoading

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
