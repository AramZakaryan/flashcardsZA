import { ComponentPropsWithoutRef } from 'react'
import { clsx } from 'clsx'
import s from './avatar.module.scss'
import person from '@/assets/svg/icons/person.svg'

export type AvatarProps = {
  variant?: 'small' | 'large'
} & ComponentPropsWithoutRef<'img'>

export const Avatar = ({
  variant = 'small',
  className,
  src = person,
  ...restProps
}: AvatarProps) => {
  return (
    <img src={src} className={clsx(s.avatar, s[variant], s.person, className)} {...restProps} />
  )
}
