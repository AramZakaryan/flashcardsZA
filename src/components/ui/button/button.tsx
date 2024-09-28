import { MouseEvent, ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

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
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${
        Component === 'a' && disabled ? s.disabledLink : ''
      } ${className || ''}`}
      disabled={Component !== 'a' && disabled}
      onClick={disabled ? handleDisabledClick : onClick}
      {...rest}
    />
  )
}
