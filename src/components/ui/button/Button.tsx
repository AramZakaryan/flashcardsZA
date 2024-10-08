import { ComponentPropsWithoutRef, ElementType, MouseEvent } from 'react'

import s from './button.module.scss'
import clsx from 'clsx'
import { Subtitle2span } from '@/components/ui/typography'

export type ButtonProps<T extends ElementType> = {
  as?: T
  /** ZA: this will make the button width 100% */
  fullWidth?: boolean
  variant?: 'primary' | 'secondary' | 'text'
  disabled?: boolean
} & ComponentPropsWithoutRef<T>

/** ZA: polymorphic button with custom styles */
export const Button = <T extends ElementType>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    className,
    fullWidth,
    variant = 'primary',
    disabled,
    onClick,
    children,
    ...rest
  } = props

  /** ZA: "a" (anchor) tag does not have disabled attribute,
   * so this function is for imitating the behavior of being disabled */
  const handleDisabledClick = (ev: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disabled) {
      ev.preventDefault()
    }
  }

  return (
    <Component
      className={clsx(
        s.button,
        s[variant],
        fullWidth && s.fullWidth,
        Component === 'a' && disabled && s.disabledLink,
        className
      )}
      disabled={Component !== 'a' && disabled}
      onClick={Component === 'a' && disabled ? handleDisabledClick : onClick}
      {...rest}
    >
      <Subtitle2span className={s.content}>{children}</Subtitle2span>
    </Component>
  )
}
