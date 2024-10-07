import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './typography.module.scss'
import clsx from 'clsx'

export const TypographyVariants = {
  h1: 'h1',
  h1span: 'span',
  h2: 'h2',
  h2span: 'span',
  h3: 'h3',
  h3span: 'span',
  h4: 'h4',
  h4span: 'span',
  body1: 'p',
  body1span: 'span',
  subtitle1: 'p',
  subtitle1span: 'span',
  body2: 'p',
  body2span: 'span',
  subtitle2: 'p',
  subtitle2span: 'span',
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

export const Typography = <T extends ElementType>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, variant = 'body1', ...rest } = props

  return <Component className={clsx(s.typography, s[variant], className)} {...rest} />
}
