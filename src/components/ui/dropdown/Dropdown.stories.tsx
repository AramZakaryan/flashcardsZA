import { Meta, StoryObj } from '@storybook/react'
import Dropdown from '@/components/ui/dropdown/Dropdown'

const meta = {
  component: Dropdown,
  parameters: {},
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const DropDownMenuDefault: Story = {
  render: () => (
    <div style={{ marginLeft: '100px' }}>
      <Dropdown />
    </div>
  ),
}
