import { ComponentPropsWithoutRef } from 'react'
import { clsx } from 'clsx'
import s from './avatar.module.scss'
import person from '@/assets/svg/icons/person.svg'

export type AvatarProps = {
  variant?: 'small' | 'large'
  src?: string | null
} & Omit<ComponentPropsWithoutRef<'img'>, 'src'>

export const Avatar = ({ variant = 'small', className, src, ...restProps }: AvatarProps) => {
  return (
    <img
      src={src || person}
      className={clsx(s.avatar, s[variant], s.person, className)}
      {...restProps}
    />
  )
}
