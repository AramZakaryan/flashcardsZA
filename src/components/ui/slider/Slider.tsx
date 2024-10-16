import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { clsx } from 'clsx'
import s from './slider.module.scss'
import { ComponentPropsWithoutRef, ElementRef, useEffect } from 'react'
import { Body2span } from '@/components'

export type SliderProps = {
  label?: string
} & ComponentPropsWithoutRef<typeof SliderPrimitive.Root>

const Slider = React.forwardRef<ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ label, className, value, max, onValueChange, ...restProps }, ref) => {
    useEffect(() => {
      // Setting value for the second Thumb
      if (value?.[1] === undefined || value?.[1] === null) {
        onValueChange?.([value?.[0] ?? 0, max ?? 0])
      }
    }, [max, value])

    return (
      <div className={s.sliderRootContainer}>
        <Body2span>{label}</Body2span>
        <div className={s.sliderContainer}>
          <span className={s.valueDisplay}>{value?.[0]}</span>
          <SliderPrimitive.Root
            ref={ref}
            className={clsx(s.SliderRoot, className)}
            onValueChange={onValueChange}
            value={[value?.[0] ?? 0, value?.[1] ?? max ?? 0]}
            {...restProps}
            max={max}
          >
            <SliderPrimitive.Track className={s.SliderTrack}>
              <SliderPrimitive.Range className={s.SliderRange} />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className={s.SliderThumb} />
            <SliderPrimitive.Thumb className={s.SliderThumb} />
          </SliderPrimitive.Root>
          <span className={s.valueDisplay}>{value?.[1]}</span>
        </div>
      </div>
    )
  }
)

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
