import { ComponentPropsWithoutRef, useState } from 'react'

import { EyeNoneIcon, EyeOpenIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'

import s from './Input.module.scss'

type Props = {
  disabled?: boolean
  inputInitialValue?: string
  label?: string
  variant?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  disabled = false,
  inputInitialValue = '',
  label,
  variant = 'text',
}: Props) => {
  const [passVisible, setPassVisible] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(inputInitialValue)

  return (
    <>
      {label && <label className={`${s.label} ${disabled && s.labelDisabled}`}>{label}</label>}
      <div className={s.inputContainer}>
        <input
          className={`${s.input} ${variant === 'password' && s.inputPassword} ${
            variant === 'search' && s.inputSearch
          }`}
          disabled={disabled}
          onInput={e => setInputValue(e.currentTarget.value)}
          type={variant === 'password' && !passVisible ? 'password' : 'text'}
          value={inputValue}
        />
        {variant === 'search' && (
          <MagnifyingGlassIcon className={`${s.searchIcon} ${disabled && s.searchIconDisabled}`} />
        )}
        {variant === 'password' &&
          (passVisible ? (
            <EyeNoneIcon
              className={`${s.eyeIcon} ${disabled && s.eyeIconDisabled}`}
              onClick={() => !disabled && setPassVisible(false)}
            />
          ) : (
            <EyeOpenIcon
              className={`${s.eyeIcon} ${disabled && s.eyeIconDisabled}`}
              onClick={() => !disabled && setPassVisible(true)}
            />
          ))}
      </div>
    </>
  )
}
