import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './ForgotPassword'

const meta = {
  title: 'Auth/ForgotPassword',
  component: ForgotPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  argTypes: {
    onSubmit: {
      action: 'on Submit',
    },
  },
}
