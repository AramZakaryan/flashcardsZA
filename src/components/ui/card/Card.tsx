import { ComponentPropsWithoutRef, ElementType } from 'react'
import { clsx } from 'clsx'
import s from './card.module.scss'
import { H1span } from '@/components/ui/typography'

export type CardProps<T extends ElementType> = {
  as?: T
  title?: string
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType>(props: CardProps<T>) => {
  const { as: Component = 'div', className, title, children, ...rest } = props

  return (
    <Component className={clsx(s.card, className)} {...rest}>
      <H1span className={s.title}>{title}</H1span>
      {children}
    </Component>
  )
}
