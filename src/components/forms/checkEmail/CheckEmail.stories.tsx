import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from './CheckEmail'

const meta = {
  title: 'Auth/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    email: 'example@mail.com',
  },
}
