import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxComponent } from './'

const meta = {
  argTypes: {
    checked: {
      control: { type: 'radio' },
      options: [true, false],
    },
    disabled: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
  component: CheckboxComponent,
  parameters: {},
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof CheckboxComponent>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxChecked: Story = {
  args: {
    checked: true,
    disabled: false,
    setChecked: () => {},
  },
}

export const CheckboxNotChecked: Story = {
  args: {
    checked: false,
    disabled: false,
    setChecked: () => {},
  },
}
export const CheckboxCheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    setChecked: () => {},
  },
}

export const CheckboxDisabled: Story = {
  args: {
    checked: false,
    disabled: true,
    setChecked: () => {},
  },
}
