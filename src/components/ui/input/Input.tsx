import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, ReactElement, useState } from 'react'
import { Close, EyeOffOutline, EyeOutline, Search } from '../icons'
import s from './input.module.scss'
import { Body2span, Caption } from '@/components/ui/typography'
import { clsx } from 'clsx'
import { Nullable } from '@/types/nullable.type'

export type InputProps = {
  label?: string
  onValueChange?: (value: string) => void
  initialValue?: string
  variant?: 'password' | 'search' | 'text'
  error?: boolean
  errorMessage?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error,
      errorMessage,
      label,
      onChange,
      onValueChange,
      placeholder,
      variant = 'text',
      disabled,
      initialValue = '',
      ...restProps
    },
    forwardedRef
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const [currentValue, setCurrentValue] = useState(initialValue)

    let iconLeft: Nullable<ReactElement> = null
    let iconRight: Nullable<ReactElement> = null
    let finalType
    switch (variant) {
      case 'password':
        const handleEyeClick = () => {
          !disabled && setShowPassword((prevState) => !prevState)
        }
        iconRight = showPassword ? (
          <EyeOffOutline onClick={handleEyeClick} />
        ) : (
          <EyeOutline onClick={handleEyeClick} />
        )
        finalType = showPassword ? 'text' : 'password'
        break
      case 'search':
        iconLeft = <Search />
        iconRight = currentValue ? <Close onClick={() => setCurrentValue('')} /> : null
        finalType = 'search'
        break
      case 'text':
        finalType = 'text'
        break
      default:
        iconRight = null
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      setCurrentValue(e.target.value)
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
    }

    return (
      <div className={clsx(className, s.rootContainer)}>
        {label && (
          <label className={clsx(s.label, disabled && s.disabled)}>
            <Body2span>{label}</Body2span>
          </label>
        )}
        <div className={s.fieldContainer}>
          {!!iconLeft && <div className={clsx(s.iconLeft, disabled && s.disabled)}>{iconLeft}</div>}
          <input
            className={clsx(s.input, error && s.error, variant === 'search' && s.search)}
            onChange={handleChange}
            placeholder={placeholder}
            type={finalType}
            disabled={disabled}
            value={currentValue}
            ref={forwardedRef}
            {...restProps}
          />
          {!!iconRight && (
            <div className={clsx(s.iconRight, disabled && s.disabled)}>{iconRight}</div>
          )}
        </div>
        {error && (
          <div className={s.error}>
            <Caption>{errorMessage}</Caption>
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'
