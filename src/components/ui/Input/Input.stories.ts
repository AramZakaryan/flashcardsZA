import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['text', 'search', 'password'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputText: Story = {
  args: {
    disabled: false,
    inputInitialValue: 'Some Text',
    label: 'Some Input',
    variant: 'text',
  },
}

export const InputTextDisabled: Story = {
  args: {
    disabled: true,
    inputInitialValue: 'Some Text',
    label: 'Some Input',
    variant: 'text',
  },
}
export const InputSearch: Story = {
  args: {
    disabled: false,
    inputInitialValue: 'Some Search Text',
    label: 'Some Search Input',
    variant: 'search',
  },
}

export const InputSearchDisabled: Story = {
  args: {
    disabled: true,
    inputInitialValue: 'Some Search Text',
    label: 'Some Search Input',
    variant: 'search',
  },
}

export const InputPassword: Story = {
  args: {
    disabled: false,
    inputInitialValue: 'Some Password',
    label: 'Some Password Input',
    variant: 'password',
  },
}

export const InputPasswordDisabled: Story = {
  args: {
    disabled: true,
    inputInitialValue: 'Some Password',
    label: 'Some Password Input',
    variant: 'password',
  },
}
