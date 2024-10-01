import * as SelectPrimitive from '@radix-ui/react-select'
import clsx from 'clsx'
import s from './select.module.scss'
import { ArrowIosDownOutline } from '@/components/ui'
import { ComponentPropsWithoutRef } from 'react'

export type SelectProps = {
  isCompact?: boolean
  label?: string
  options?: {
    value: string
    text: string
  }[]
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

export const Select = ({
  disabled,
  defaultValue,
  isCompact,
  label,
  options,
  onValueChange,
  ...restProps
}: SelectProps) => {
  return (
    <SelectPrimitive.Root
      disabled={disabled}
      defaultValue={defaultValue || options?.[0].value}
      {...restProps}
      onValueChange={onValueChange}
    >
      {label && !isCompact && (
        <label className={clsx(s.label, disabled && s.disabled)}>{label}</label>
      )}

      <SelectPrimitive.Trigger className={clsx(s.selectTrigger, isCompact && s.compact)}>
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon className={s.selectIcon}>
          <ArrowIosDownOutline width={16} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          collisionPadding={0}
          className={clsx(s.selectContent, isCompact && s.compact)}
          position={'popper'}
        >
          <SelectPrimitive.Viewport>
            {options?.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                className={clsx(s.selectItem, isCompact && s.compact)}
              >
                <SelectPrimitive.ItemText>{option.text}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
