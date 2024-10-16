import { ComponentPropsWithoutRef } from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import clsx from 'clsx'
import s from './tabs.module.scss'
import { Body2span } from '@/components'

export type TabsProps = {
  label?: string
  options?: {
    value: string
    text: string
    disabled?: boolean
  }[]
} & ComponentPropsWithoutRef<typeof TabsPrimitive.Root>

export const Tabs = ({
  label,
  className,
  options,
  defaultValue = options?.[0].value,
  ...restProps
}: TabsProps) => {
  return (
    <div className={clsx(s.mainContainer, className)}>
      <Body2span>{label}</Body2span>
      <TabsPrimitive.Root className={s.root} defaultValue={defaultValue} {...restProps}>
        <TabsPrimitive.List className={s.tabsList}>
          {options?.map(({ value, text, disabled }) => (
            <TabsPrimitive.Trigger
              key={value}
              value={value}
              disabled={disabled}
              className={s.tabsTrigger}
            >
              {text}
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
      </TabsPrimitive.Root>
    </div>
  )
}

// const TabsContent = forwardRef<
//   ElementRef<typeof TabsPrimitive.Content>,
//   ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
// >(({ className, ...props }, forwardedRef) => (
//   <TabsPrimitive.Content ref={forwardedRef} className={clsx(s.tabsContent, className)} {...props} />
// ))
// TabsContent.displayName = TabsPrimitive.Content.displayName
