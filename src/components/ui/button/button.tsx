import { MouseEvent, ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'
import clsx from 'clsx'
import { Subtitle2 } from '@/components/ui/typography'

export type ButtonProps<T extends ElementType> = {
  as?: T
  /** ZA: this will make the button width 100% */
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
  disabled?: boolean
} & ComponentPropsWithoutRef<T>

/** ZA: polymorphic button with custom styles */
export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
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
        className,
        s.button,
        s[variant],
        fullWidth && s.fullWidth,
        Component === 'a' && disabled && s.disabledLink,
      )}
      disabled={Component !== 'a' && disabled}
      onClick={Component !== 'a' && disabled ? handleDisabledClick : onClick}
      {...rest}
    >
      <Subtitle2>{children}</Subtitle2>
    </Component>
  )
}
