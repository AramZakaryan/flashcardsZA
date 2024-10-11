import type { Meta, StoryObj } from '@storybook/react'
import johnImage from '@/assets/image/john.png'

import { PersonalInformation } from '././PersonalInformation'

const meta = {
  title: 'Auth/PersonalInformation',
  component: PersonalInformation,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    nickname: 'John',
    imageSrc: johnImage,
    email: 'j&johnson@gmail.com',
  },
  argTypes: {
    onSubmit: {
      action: 'on Submit',
    },
    onSignOut: {
      action: 'on SignOut',
    },
  },
}
