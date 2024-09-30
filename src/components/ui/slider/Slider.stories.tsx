import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from './Slider'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderControlled: Story = {
  args: {
    max: 13,
    min: 0,
    step: 1,
    value: [2, 10],
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [values, setValues] = useState(args.value)

    return <Slider {...args} onValueChange={setValues} value={values} />
  },
}
