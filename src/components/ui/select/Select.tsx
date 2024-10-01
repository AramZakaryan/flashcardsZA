import * as SelectPrimitive from '@radix-ui/react-select'
import clsx from 'clsx'
import s from './select.module.scss'
import { ArrowIosDownOutline } from '@/components/ui'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

type SelectProps = {
  label?: string
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

const Select = ({ children, label, disabled, ...restProps }: SelectProps) => (
  <>
    <SelectPrimitive.Root disabled={disabled} {...restProps}>
      {label && <label className={clsx(s.label, disabled && s.disabled)}>{label}</label>}
      {children}
    </SelectPrimitive.Root>
  </>
)

const SelectTrigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...restProps }, forwardedRef) => (
  <>
    <SelectPrimitive.Trigger
      ref={forwardedRef}
      className={clsx(s.selectTrigger, className)}
      {...restProps}
    >
      {children}
      <SelectPrimitive.Icon>
        <ArrowIosDownOutline width={16} height={16} viewBox={'0 0 20 20'} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  </>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...restProps }, forwardedRef) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      collisionPadding={0}
      ref={forwardedRef}
      className={clsx(s.selectContent, className)}
      position={position}
      {...restProps}
    >
      <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...restProps }, forwardedRef) => (
  <SelectPrimitive.Item ref={forwardedRef} className={clsx(s.selectItem, className)} {...restProps}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectValue = SelectPrimitive.Value

export { Select, SelectValue, SelectTrigger, SelectContent, SelectItem }
