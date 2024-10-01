import type { Meta, StoryObj } from '@storybook/react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SelectDefault: Story = {
  render: () => (
    <Select label={'label'} defaultValue={'val1'}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={`val1`}>Select-box-1</SelectItem>
        <SelectItem value={`val2`}>Select-box-2</SelectItem>
        <SelectItem value={`val3`}>Select-box-3</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const SelectDisabled: Story = {
  render: () => (
    <Select label={'label'} defaultValue={'val1'} disabled>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={`val1`}>Select-box-1</SelectItem>
        <SelectItem value={`val2`}>Select-box-2</SelectItem>
        <SelectItem value={`val3`}>Select-box-3</SelectItem>
      </SelectContent>
    </Select>
  ),
}
