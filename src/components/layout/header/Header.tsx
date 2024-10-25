import s from './header.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import { clsx } from 'clsx'
import { H4span } from '@/components'
import UserDropdown from '@/components/ui/dropdown/UserDropdown'
import { useLogOutMutation, User } from '@/services/auth'
import { useAppDispatch } from '@/services/store'
import { baseApi } from '@/services'

export type HeaderProps = Partial<Pick<User, 'avatar' | 'name' | 'email'>> &
  ComponentPropsWithoutRef<'header'>

export const Header = ({ avatar, name, email, className, children, ...restProps }: HeaderProps) => {
  const dispatch = useAppDispatch()

  const [logOut] = useLogOutMutation()

  const logOutHandler = () => {
    logOut()
    dispatch(baseApi.util.resetApiState())
  }

  return (
    <header className={clsx(s.header, className)} {...restProps}>
      <div className={s.headerContent}>
        <H4span>FleshCards</H4span>
        <H4span>{name}</H4span> {/* ZA: temporary, forDel */}
        {children}
        <UserDropdown avatar={avatar} name={name} email={email} logOut={logOutHandler} />
      </div>
    </header>
  )
}
