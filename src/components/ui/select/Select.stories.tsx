import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '@/components/ui'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    onValueChange: { action: 'selected' },
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SelectDefault: Story = {
  args: {
    disabled: false,
    isCompact: false,
    label: 'label',
    options: [
      { value: 'val1', text: '100' },
      { value: 'val2', text: '10' },
      { value: 'val3', text: '20' },
    ],
  },
}

export const SelectDefaultDisabled: Story = {
  args: { ...SelectDefault.args, disabled: true },
}

export const SelectCompact: Story = {
  args: { ...SelectDefault.args, isCompact: true },
}

export const SelectCompactDisabled: Story = {
  args: { ...SelectDefaultDisabled.args, isCompact: true },
}
