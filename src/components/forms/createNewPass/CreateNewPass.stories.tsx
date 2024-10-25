import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from './CreateNewPass'

const meta = {
  title: 'Forms/CreateNewPasswordForm',
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  argTypes: {
    onSubmit: {
      action: 'on Submit',
    },
  },
}
