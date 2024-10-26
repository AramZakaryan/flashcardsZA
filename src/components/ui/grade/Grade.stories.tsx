import { Meta, StoryObj } from '@storybook/react'
import { Grade } from './Grade'

const meta = {
  component: Grade,
  parameters: {},
  tags: ['autodocs'],
  title: 'Components/Grade',
} satisfies Meta<typeof Grade>

export default meta
type Story = StoryObj<typeof meta>

export const GradeDefault: Story = {
  args: {
    grade: 2,
  },
}
