import * as RadioGroup from '@radix-ui/react-radio-group'
import s from './radio.module.scss'
import { Body2 } from '@/components'
import { ComponentPropsWithoutRef } from 'react'
import { useFinalId } from '@/hooks/useFinalId'
import { clsx } from 'clsx'

export type RadioProps = {
  items: RadioItem[]
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

export const Radio = ({ items, disabled, ...restProps }: RadioProps) => {
  return (
    <RadioGroup.Root
      className={clsx(s.RadioGroupRoot, { [s.disabled]: disabled })}
      disabled={disabled}
      {...restProps}
    >
      {items.map((option, i) => (
        <RadioItem key={i} {...option} />
      ))}
    </RadioGroup.Root>
  )
}

type RadioItem = {
  value: string
  label?: string
  id?: string
} & ComponentPropsWithoutRef<typeof RadioGroup.Item>

const RadioItem = ({ value, label, id, ...restProps }: RadioItem) => {
  const finalId = useFinalId(id)
  return (
    <div className={s.itemContainer}>
      <RadioGroup.Item className={s.RadioGroupItem} value={value} id={finalId} {...restProps}>
        <RadioGroup.Indicator className={s.RadioGroupIndicator} />
      </RadioGroup.Item>
      <label className={s.Label} htmlFor={finalId}>
        <Body2>{label}</Body2>
      </label>
    </div>
  )
}
