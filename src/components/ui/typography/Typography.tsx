import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './typography.module.scss'
import clsx from 'clsx'

export const TypographyVariants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body1: 'p',
  subtitle1: 'p',
  body2: 'p',
  subtitle2: 'p',
  caption: 'span',
  overline: 'p',
  link1: 'a',
  link2: 'a',
} as const

export type TypographyProps<T extends ElementType> = {
  as?: T
  variant?: keyof typeof TypographyVariants
  className?: string
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, variant = 'body1', ...rest } = props

  return <Component className={clsx(className, s.typography, s[variant])} {...rest} />
}
