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
    error: {
      control: { type: 'boolean' },
    },
  },
  args: {
    error: false, // Set default value here
    errorMessage: 'Error!',
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputText: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
    initialValue: 'Input',
    variant: 'text',
  },
}

export const InputTextError: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
    variant: 'text',
    initialValue: 'Input',
    error: true,
    errorMessage: 'Error!',
  },
}

export const InputTextDisabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
    placeholder: 'Input',
    variant: 'text',
    initialValue: 'Input',
  },
}

export const InputPassword: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
    initialValue: 'Input',
    variant: 'password',
  },
}

export const InputPasswordError: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
    variant: 'password',
    initialValue: 'Input',
    error: true,
    errorMessage: 'Error!',
  },
}

export const InputPasswordDisabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
    placeholder: 'Input',
    variant: 'password',
    initialValue: 'Input',
  },
}

export const InputSearch: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
    initialValue: 'Input',
    variant: 'search',
  },
}

export const InputSearchError: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
    variant: 'search',
    initialValue: 'Input',
    error: true,
    errorMessage: 'Error!',
  },
}

export const InputSearchDisabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
    placeholder: 'Input',
    variant: 'search',
    initialValue: 'Input',
  },
}
