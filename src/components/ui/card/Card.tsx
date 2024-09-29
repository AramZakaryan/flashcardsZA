import { ComponentPropsWithoutRef, ElementType } from 'react'
import { clsx } from 'clsx'
import s from './card.module.scss'
import { H1 } from '@/components/ui/typography'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  title?: string
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(props: CardProps<T>) => {
  const { as: Component = 'div', className, title, children, ...rest } = props

  return (
    <Component className={clsx(s.card, className)} {...rest}>
      <H1 className={s.title}>{title}</H1>
      {children}
    </Component>
  )
}
