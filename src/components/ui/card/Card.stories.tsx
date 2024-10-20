import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './'
import { Button } from '@/components/ui/button'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardEmpty: Story = {
  args: {},
}

export const CardWithTitle: Story = {
  args: {
    title: 'Page Title',
  },
}

export const CardWithChildren: Story = {
  args: {
    title: 'Page Title',
    children: (
      <>
        <p style={{ textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button variant={'primary'} fullWidth>
          Primary Button
        </Button>
        <Button variant={'secondary'}>Secondary Button</Button>
      </>
    ),
  },
}
