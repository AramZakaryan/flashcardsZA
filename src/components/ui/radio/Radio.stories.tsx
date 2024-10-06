import { Meta, StoryObj } from '@storybook/react'
import { Radio } from '@/components/ui/radio/Radio'

const meta = {
  component: Radio,
  parameters: {},
  tags: ['autodocs'],
  title: 'Components/Radio',
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const RadioDefault: Story = {
  args: {
    defaultValue: 'value2',
    items: [
      {
        id: '111',
        value: 'value1',
        label: 'label1',
      },
      {
        id: '222',
        value: 'value2',
        label: 'label2',
      },
      {
        id: '333',
        value: 'value3',
        label: 'label3',
      },
    ],
  },

  render: (args) => {
    return (
      <div style={{ marginLeft: '100px' }}>
        <Radio {...args} />
      </div>
    )
  },
}
