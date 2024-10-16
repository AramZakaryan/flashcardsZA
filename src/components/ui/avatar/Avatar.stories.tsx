import { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import johnImage from '@/assets/image/john.png'

const meta = {
  component: Avatar,
  parameters: {},
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarSmall: Story = {
  args: {
    src: johnImage,
    variant: 'small',
    alt: 'ivan image',
  },
}

export const AvatarLarge: Story = {
  args: {
    src: johnImage,
    variant: 'large',
    alt: 'ivan image',
  },
}
