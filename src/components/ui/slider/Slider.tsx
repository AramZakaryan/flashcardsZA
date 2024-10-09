import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { clsx } from 'clsx'
import s from './slider.module.scss'
import { useEffect } from 'react'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, value, max, onValueChange, ...restProps }, ref) => {
  useEffect(() => {
    // Setting value for the second Thumb
    if (value?.[1] === undefined || value?.[1] === null) {
      onValueChange?.([value?.[0] ?? 0, max ?? 0])
    }
  }, [max, value])

  return (
    <div className={s.sliderRootContainer}>
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
  )
})

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
