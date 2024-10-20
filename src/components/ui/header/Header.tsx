import s from './header.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import { clsx } from 'clsx'
import { H4span } from '@/components'
import UserDropdown from '@/components/ui/dropdown/UserDropdown'
import johnImage from '@/assets/image/john.png'

export type HeaderProps = ComponentPropsWithoutRef<'header'>

export const Header = ({ className, children, ...restProps }: HeaderProps) => {
  return (
    <header className={clsx(s.header, className)} {...restProps}>
      <div className={s.headerContent}>
        <H4span>FleshCards</H4span>
        {children}
        <UserDropdown
          avatar={johnImage}
          name={'John'}
          email={'john@example.com'}
          onSignOut={() => {
            console.log('signOut')
          }}
        />
      </div>
    </header>
  )
}
