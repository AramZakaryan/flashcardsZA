import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from './ForgotPass'

const meta = {
  title: 'Forms/ForgotPasswordForm',
  component: ForgotPasswordForm,
  tags: ['autodocs'],
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  argTypes: {
    onSubmit: {
      action: 'on Submit',
    },
  },
}
