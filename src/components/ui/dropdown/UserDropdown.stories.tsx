import { Meta, StoryObj } from '@storybook/react'
import UserDropdown from '@/components/ui/dropdown/UserDropdown'
import johnImage from '@/assets/image/john.png'

const meta = {
  component: UserDropdown,
  parameters: {},
  argTypes: {
    onSignOut: {
      action: 'signOut',
    },
  },
  tags: ['autodocs'],
  title: 'Components/UserDropdown',
} satisfies Meta<typeof UserDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const UserDropdownMenuDefault: Story = {
  args: {
    avatar: johnImage,
    name: 'John',
    email: 'j&johnson@gmail.com',
  },
}
