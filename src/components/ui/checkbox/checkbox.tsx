import { useState } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

type Props = {
  checked?: 'indeterminate' | boolean
  disabled?: boolean
  setChecked: (s: Checkbox.CheckedState) => void
}

export const CheckboxComponent = ({ checked = false, disabled = false, setChecked }: Props) => {
  return (
    <form>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <Checkbox.Root
          checked={checked}
          className={`${s.CheckboxRoot} ${checked && s.CheckboxRootChecked} ${
            disabled && s.CheckboxRootDisabled
          }`}
          disabled={disabled}
          id={'c1'}
          onCheckedChange={setChecked}
        >
          <Checkbox.Indicator
            className={`${s.CheckboxIndicator} 
            ${disabled && s.CheckboxIndicatorDisabled}`}
          >
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className={`${s.Label} ${disabled && s.LabelDisabled}`} htmlFor={'c1'}>
          Some Text
        </label>
      </div>
    </form>
  )
}
