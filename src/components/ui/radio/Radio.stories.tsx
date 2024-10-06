import { Meta, StoryObj } from '@storybook/react'
import { Radio } from '@/components/ui/radio/Radio'

const meta = {
  component: Radio,
  argTypes: {
    disabled: { control: 'boolean' },
    onValueChange: { action: 'onValueChange' },
  },
  tags: ['autodocs'],
  title: 'Components/Radio',
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const RadioDefault: Story = {
  args: {
    disabled: false,
    defaultValue: 'value1',
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
}

export const RadioDisables: Story = {
  args: {
    ...RadioDefault.args,
    disabled: true,
  },
}
