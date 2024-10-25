import s from './header.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import { clsx } from 'clsx'
import { H4span } from '@/components'
import UserDropdown from '@/components/ui/dropdown/UserDropdown'
import { User } from '@/services/auth'

export type HeaderProps = Partial<Pick<User, 'avatar' | 'name' | 'email'>> &
  ComponentPropsWithoutRef<'header'>

export const Header = ({ avatar, name, email, className, children, ...restProps }: HeaderProps) => {
  return (
    <header className={clsx(s.header, className)} {...restProps}>
      <div className={s.headerContent}>
        <H4span>FleshCards</H4span>
        <H4span>{name}</H4span> {/* ZA: temporary, forDel */}
        {children}
        <UserDropdown
          avatar={avatar}
          name={name}
          email={email}
          onSignOut={() => {
            console.log('signOut')
          }}
        />
      </div>
    </header>
  )
}
