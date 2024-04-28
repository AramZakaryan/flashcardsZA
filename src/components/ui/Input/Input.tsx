import { ComponentPropsWithoutRef, useState } from 'react'

import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons'

import s from './Input.module.scss'

type Props = {
  disabled?: boolean
  label?: string
  variant?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const Input = ({ disabled = false, label, variant = 'text' }: Props) => {
  const [passVisible, setPassVisible] = useState<boolean>(false)

  return (
    <>
      {label && <label className={`${s.label} ${disabled && s.labelDisabled}`}>{label}</label>}
      <div className={s.inputContainer}>
        <input
          autoFocus
          className={`${s.input} `}
          disabled={disabled}
          type={passVisible ? 'text' : 'password'}
        />
        {passVisible ? (
          <EyeNoneIcon
            className={`${s.eyeIcon} ${disabled && s.eyeIconDisabled}`}
            onClick={() => !disabled && setPassVisible(false)}
          />
        ) : (
          <EyeOpenIcon
            className={`${s.eyeIcon} ${disabled && s.eyeIconDisabled}`}
            onClick={() => !disabled && setPassVisible(true)}
          />
        )}
      </div>
    </>
  )
}
