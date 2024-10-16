import type { Meta, StoryObj } from '@storybook/react'
import { Subtitle1span } from '@/components'
import { Layout } from './Layout'

const meta = {
  component: Layout,
  tags: ['autodocs'],
  title: 'Components/Layout',
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>

export const LayoutDefault: Story = {
  args: {
    children: (
      <>
        <Subtitle1span>Layout Content</Subtitle1span>
      </>
    ),
  },
}
