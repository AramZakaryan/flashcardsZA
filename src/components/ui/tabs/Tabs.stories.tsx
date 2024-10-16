import { Meta } from '@storybook/react'
import { Tabs } from '@/components/ui/tabs/Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>

export const TabsDefault = () => (
  <Tabs
    label={'Tabs'}
    defaultValue={'val2'}
    options={[
      { value: 'val1', text: 'Switcher 1' },
      { value: 'val2', text: 'Switcher 2' },
      { value: 'val3', text: 'Switcher 3' },
      { value: 'val4', text: 'Switcher 4' },
    ]}
  />
)

export const TabsWithDisabled = () => (
  <Tabs
    label={'Tabs'}
    defaultValue={'val2'}
    options={[
      { value: 'val1', text: 'Switcher 1' },
      { value: 'val2', text: 'Switcher 2' },
      { value: 'val3', text: 'Switcher 3', disabled: true },
      { value: 'val4', text: 'Switcher 4' },
    ]}
  />
)
