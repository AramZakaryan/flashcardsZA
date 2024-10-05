import { Meta, StoryObj } from '@storybook/react'
import Dropdown from '@/components/ui/dropdown/Dropdown'
import DropdownMenuDemo from '@/components/ui/dropdown/Dropdown'

const meta = {
  component: Dropdown,
  parameters: {},
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const DropDefault: Story = {
  render: () => {
    return <DropdownMenuDemo />
  },
}
