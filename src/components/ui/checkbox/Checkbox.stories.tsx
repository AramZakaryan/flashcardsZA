import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/components/ui/checkbox/Checkbox'

const meta = {
  component: Checkbox,
  parameters: {},
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxDefault: Story = {
  args: {
    label: 'Checkbox',
  },
}

export const CheckboxChecked: Story = {
  args: {
    label: 'Checkbox',
    checked: true,
    disabled: false,
  },
}

export const CheckboxNotChecked: Story = {
  args: {
    label: 'Checkbox',
    checked: false,
    disabled: false,
  },
}
export const CheckboxCheckedDisabled: Story = {
  args: {
    label: 'Checkbox',
    checked: true,
    disabled: true,
  },
}

export const CheckboxDisabled: Story = {
  args: {
    label: 'Checkbox',
    checked: false,
    disabled: true,
  },
}
