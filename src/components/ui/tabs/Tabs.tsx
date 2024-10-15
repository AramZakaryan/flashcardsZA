import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import clsx from 'clsx'
import s from './tabs.module.scss'

const Tabs = TabsPrimitive.Root

const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, forwardedRef) => (
  <TabsPrimitive.List ref={forwardedRef} className={clsx(s.tabsList, className)} {...props} />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, forwardedRef) => (
  <TabsPrimitive.Trigger ref={forwardedRef} className={clsx(s.tabsTrigger, className)} {...props} />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

// const TabsContent = forwardRef<
//   ElementRef<typeof TabsPrimitive.Content>,
//   ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
// >(({ className, ...props }, forwardedRef) => (
//   <TabsPrimitive.Content ref={forwardedRef} className={clsx(s.tabsContent, className)} {...props} />
// ))
// TabsContent.displayName = TabsPrimitive.Content.displayName

export {
  Tabs,
  TabsList,
  TabsTrigger,
  // TabsContent
  s,
}
