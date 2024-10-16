import { ComponentPropsWithoutRef } from 'react'
import { clsx } from 'clsx'
import s from './avatar.module.scss'

export type AvatarProps = {
  variant?: 'small' | 'large'
} & ComponentPropsWithoutRef<'img'>

export const Avatar = ({ variant = 'small', className, ...restProps }: AvatarProps) => {
  return <img className={clsx(s.avatar, s[variant], className)} {...restProps} />
}
