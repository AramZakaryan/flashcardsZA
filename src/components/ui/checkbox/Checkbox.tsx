import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import s from './checkbox.module.scss'
import { Body2span } from '@/components'
import clsx from 'clsx'
import { useFinalId } from '@/hooks/useFinalId'
import { CheckIcon } from '@radix-ui/react-icons'
import * as Label from '@radix-ui/react-label'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: ReactNode
  onValueChange?: (checked: boolean) => void
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  (
    { checked, className, disabled = false, id, label, onValueChange, ...restProps },
    forwardedRef
  ) => {
    const finalId = useFinalId(id)
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CheckboxRadix.Root
          checked={checked}
          className={clsx(className, s.CheckboxRoot)}
          id={finalId}
          disabled={disabled}
          onCheckedChange={onValueChange}
          {...restProps}
          ref={forwardedRef}
        >
          <CheckboxRadix.Indicator className={s.CheckboxIndicator}>
            <CheckIcon className={s.CheckIcon} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        <Label.Root className={clsx(className, s.Label, disabled && s.disabled)} htmlFor={finalId}>
          <Body2span>{label}</Body2span>
        </Label.Root>
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'
