import type { Meta, StoryObj } from '@storybook/react'

import { LogInForm } from './LogIn'

const meta = {
  title: 'Forms/LogInForm',
  component: LogInForm,
  tags: ['autodocs'],
} satisfies Meta<typeof LogInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  argTypes: {
    onSubmit: {
      action: 'on Submit',
    },
  },
}
