import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'
import { Subtitle1span } from '@/components'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderDefault: Story = {
  args: {
    children: (
      <>
        <Subtitle1span>Header Element 1</Subtitle1span>
        <Subtitle1span>Header Element 2</Subtitle1span>
      </>
    ),
  },
}
